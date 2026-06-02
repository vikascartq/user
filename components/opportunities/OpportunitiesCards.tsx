import { useMemo, useState } from "react";
import useJobs from "@/hooks/useJobs";
import FeatureCard from "@/ui/feat-card/FeatureCard";
import OpportunitiesFilter from "./OpportunitiesFilter";

export default function OpportunitiesCards({ router }: { router: any }) {
    const { jobList } = useJobs();
    const [searchText, setSearchText] = useState("");
    const [locationText, setLocationText] = useState("");
    const [appliedSearch, setAppliedSearch] = useState("");
    const [appliedLocation, setAppliedLocation] = useState("");

    const filteredJobs = useMemo(() => {
        const normalizedSearch = appliedSearch.trim().toLowerCase();
        const normalizedLocation = appliedLocation.trim().toLowerCase();

        return jobList.filter((opportunity) => {
            const titleMatch = opportunity.name?.toLowerCase().includes(normalizedSearch);
            const tagMatch = opportunity.skills?.some((skill) => skill.toLowerCase().includes(normalizedSearch));
            const searchMatch = !normalizedSearch || titleMatch || tagMatch;
            const locationMatch = !normalizedLocation || opportunity.location?.toLowerCase().includes(normalizedLocation);
            return searchMatch && locationMatch;
        });
    }, [jobList, appliedSearch, appliedLocation]);

    return (
        <div className="section-base-bg opportunities-section-base">
            <div className="section-frame">
                <div className="opportunities-section-container">
                    <OpportunitiesFilter
                        searchValue={searchText}
                        locationValue={locationText}
                        onSearchChange={setSearchText}
                        onLocationChange={setLocationText}
                        onApply={() => {
                            setAppliedSearch(searchText);
                            setAppliedLocation(locationText);
                        }}
                    />
                    {
                        filteredJobs.length === 0 ? (
                            <div className="text-center text-muted">
                                No opportunities found matching your criteria.
                            </div>
                        ) : (
                            <div className="opportunities-section-card-wrapper">
                                {
                                    filteredJobs.map((opportunity, i) => (
                                        <FeatureCard
                                            key={`opportunity-${i + 1}`}
                                            title={opportunity.name}
                                            location={opportunity.location}
                                            tags={opportunity.skills}
                                            onApply={() => router.push('contact-us?type=job')}
                                            type="type2"
                                        />
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
