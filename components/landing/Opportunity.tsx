import ButtonAction from "@/ui/buttons/ButtonAction";
import FeatureCard from "@/ui/feat-card/FeatureCard";
import SectionFrame from "@/ui/section/SectionFrame";
import Image from "next/image";
import VerticalCoverflow from "./VerticalCoverflow";

export default function Opportunity() {
    return (
        <div className="section-base-bg">
            <SectionFrame
                type={"reverse"}
                imgNode={
                    <VerticalCoverflow
                        list={opportunities}
                        renderSlide={(opportunity) => (
                            <FeatureCard
                                title={opportunity.title}
                                location={opportunity.location}
                                tags={opportunity.tags}
                                onApply={() => { }}
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
                            type="primary"
                            text="View All"
                            onClick={() => { }}
                        />
                    </>
                }
            />
        </div>
    )
}


const opportunities = [
    {
        title: "Compilance Officer (CFD)",
        location: "Dubai",
        tags: ["Business Development", "Leadership", "100 FTD's/month", "Trading volume Lots: 4k/month", "Trading", " Book size: 2M"]
    },
    {
        title: "Senior FX Trader",
        location: "Dubai",
        tags: ["Business Development", "Leadership", "100 FTD's/month", "Trading volume Lots: 4k/month", "Trading", " Book size: 2M"]
    },
    {
        title: "Oil Market Analyst",
        location: "Dubai",
        tags: ["Business Development", "Leadership", "100 FTD's/month", "Trading volume Lots: 4k/month", "Trading", " Book size: 2M"]
    },
    {
        title: "Compilance Officer (CFD)",
        location: "Dubai",
        tags: ["Business Development", "Leadership", "100 FTD's/month", "Trading volume Lots: 4k/month", "Trading", " Book size: 2M"]
    },
    {
        title: "Senior FX Trader",
        location: "Dubai",
        tags: ["Business Development", "Leadership", "100 FTD's/month", "Trading volume Lots: 4k/month", "Trading", " Book size: 2M"]
    },
    {
        title: "Oil Market Analyst",
        location: "Dubai",
        tags: ["Business Development", "Leadership", "100 FTD's/month", "Trading volume Lots: 4k/month", "Trading", " Book size: 2M"]
    }
]