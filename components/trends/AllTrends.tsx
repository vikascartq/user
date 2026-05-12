import TrendCard from "@/ui/trend-card/TrendCard";
import { useRouter } from "next/navigation";

export default function AllTrends() {
    const navigate = useRouter();
    const handleView = (trendId: string) => {
        navigate.push(`/trends/${trendId}`)
    }
    return (
        <div className="section-base-bg all-trends-section-base">
            <div className="section-frame">
                <div className="current-trends-path-container">
                    <div className="all-trends-card-wrapper">
                        {
                            Array(12).fill("").map((_, i) => (
                                <TrendCard
                                    key={`trend-card-${i + 1}`}
                                    tag={"FX BROKER"}
                                    title={"Building a Recruitment Strategy for Forex Brokers"}
                                    para={"How FX companies can design hiring frameworks to attract experienced trading and sales professionals."}
                                    btnText={"Read Full Article "}
                                    btnClick={() => handleView(i + "101")}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
