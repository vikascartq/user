import useJobs from "@/hooks/useJobs";
import FeatureCard from "@/ui/feat-card/FeatureCard";
import OpportunitiesFilter from "./OpportunitiesFilter";

export default function OpportunitiesCards() {
    const { jobList } = useJobs();
    return (
        <div className="section-base-bg opportunities-section-base">
            <div className="section-frame">
                <div className="opportunities-section-container">
                    {/* <div className="section-content-title-wrapper justify-center">
                                      <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                                      <h2 className="section-content-title">How ReqKing supports <span>businesses   </span></h2>
                                  </div>
                                  <div>
                                      <p className="how-support-path-para">Support can be provided as project-based consultancy, retained advisory, or ongoing strategic partnership depending on the stage, pressure points, and growth plans of the business.</p>
                                  </div> */}
                    <OpportunitiesFilter />
                    <div className="opportunities-section-card-wrapper">
                        {
                            jobList.map((opportunity, i) => (
                                <FeatureCard
                                    key={`opportunity-${i + 1}`}
                                    title={opportunity.name}
                                    location={opportunity.location}
                                    tags={opportunity.skills}
                                    onApply={() => { }}
                                    type="type2"
                                />
                            ))
                        }
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