import useJobs from "@/hooks/useJobs";
import GoldenArrowIcon from "@/svg/org/GoldenArrowIcon";
import FeatureCard from "@/ui/feat-card/FeatureCard";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CoverflowSlider from "./CoverFlowSlider";

export default function Opportunity() {
    const navigate = useRouter();
    const { jobList } = useJobs();
    const handleView = () => {
        navigate.push("/opportunities")
    }
    return (
        <div className="section-base-bg job-seeker-opportunity-section">
            <div className="section-frame">
                <div className="next-hire-container">
                    <div className="section-content-title-wrapper justify-center">
                        <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                        <h2 className="section-content-title">Featured <span>Opportunities </span></h2>
                    </div>
                    {
                        jobList.length > 0 &&
                        <CoverflowSlider
                            list={jobList}
                            renderSlide={(opportunity) => (
                                <FeatureCard
                                    title={opportunity.name}
                                    location={opportunity.location}
                                    tags={opportunity.skills}
                                    onApply={() => { }}
                                    type="type2"
                                />
                            )}
                        />
                    }
                    <div className="flex justify-center">
                        <button type="button" onClick={handleView} className="next-hire-view-btn">View All <GoldenArrowIcon /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}


// const opportunities = [
//     {
//         title: "Compilance Officer (CFD)",
//         location: "Dubai",
//         tags: ["Full- time", "Forex", "Trading", "Analysis", "Business Development", "100 FTD's/month"]
//     },
//     {
//         title: "Senior FX Trader",
//         location: "Dubai",
//         tags: ["Full- time", "Forex", "Trading", "Analysis", "Business Development", "100 FTD's/month"]
//     },
//     {
//         title: "Oil Market Analyst",
//         location: "Dubai",
//         tags: ["Full- time", "Forex", "Trading", "Analysis", "Business Development", "100 FTD's/month"]
//     },
//     {
//         title: "Compilance Officer (CFD)",
//         location: "Dubai",
//         tags: ["Full- time", "Forex", "Trading", "Analysis", "Business Development", "100 FTD's/month"]
//     },
//     {
//         title: "Senior FX Trader",
//         location: "Dubai",
//         tags: ["Full- time", "Forex", "Trading", "Analysis", "Business Development", "100 FTD's/month"]
//     },
//     {
//         title: "Oil Market Analyst",
//         location: "Dubai",
//         tags: ["Full- time", "Forex", "Trading", "Analysis", "Business Development", "100 FTD's/month"]
//     }
// ]