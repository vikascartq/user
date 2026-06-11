import useJobs from "@/hooks/useJobs";
import ButtonAction from "@/ui/buttons/ButtonAction";
import FeatureCard from "@/ui/feat-card/FeatureCard";
import SectionFrame from "@/ui/section/SectionFrame";
import Image from "next/image";
import VerticalCoverflow from "./VerticalCoverflow";
import {useRouter}   from "next/navigation";

export default function Opportunity() {
    const { jobList } = useJobs();
    const router = useRouter();
    return (
        <div className="section-base-bg opportunity-section-base">
            <SectionFrame
                type={"reverse"}
                imgNode={
                    jobList.length > 0 &&
                    <VerticalCoverflow
                        list={jobList}
                        renderSlide={(opportunity) => (
                            <FeatureCard
                                title={opportunity.name}
                                location={opportunity.location}
                                tags={opportunity.skills}
                                onApply={() => { router.push("/opportunities") }}
                                type="type1"
                                responsiveType={true}
                            />
                        )}
                    />
                }
                contentNode={
                    <>
                        <div className="section-content-title-wrapper">
                            <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                            <h2 className="section-content-title">Featured <span>Opportunities</span></h2>
                        </div>
                        <p className="section-content-para">Top professionals choose ReqKing to access high-impact roles across crypto, multi-asset trading, iGaming, AI, IT, Data Science, Backend Support (CS/OPS, Payments, Risk, Dealing, Anti-Fraud), Cloud, Infrastructure, Cyber Security and high-growth fintech businesses.</p>
                        <p className="section-content-para">We connect talent with organisations where performance is valued, growth is accelerated and long-term success is built.</p>
                        <ButtonAction
                            className="mt-2 sm:mt-0"
                            type="primary"
                            text="View All"
                            onClick={() => router.push("/opportunities")}
                        />
                    </>
                }
            />
        </div>
    )
}


// const opportunities = [
//     {
//         title: "Compilance Officer (CFD)",
//         location: "Dubai",
//         tags: ["Business Development", "Leadership", "100 FTD's/month", "Trading volume Lots: 4k/month", "Trading", " Book size: 2M"]
//     },
//     {
//         title: "Senior FX Trader",
//         location: "Dubai",
//         tags: ["Business Development", "Leadership", "100 FTD's/month", "Trading volume Lots: 4k/month", "Trading", " Book size: 2M"]
//     },
//     {
//         title: "Oil Market Analyst",
//         location: "Dubai",
//         tags: ["Business Development", "Leadership", "100 FTD's/month", "Trading volume Lots: 4k/month", "Trading", " Book size: 2M"]
//     },
//     {
//         title: "Compilance Officer (CFD)",
//         location: "Dubai",
//         tags: ["Business Development", "Leadership", "100 FTD's/month", "Trading volume Lots: 4k/month", "Trading", " Book size: 2M"]
//     },
//     {
//         title: "Senior FX Trader",
//         location: "Dubai",
//         tags: ["Business Development", "Leadership", "100 FTD's/month", "Trading volume Lots: 4k/month", "Trading", " Book size: 2M"]
//     },
//     {
//         title: "Oil Market Analyst",
//         location: "Dubai",
//         tags: ["Business Development", "Leadership", "100 FTD's/month", "Trading volume Lots: 4k/month", "Trading", " Book size: 2M"]
//     }
// ]