import GoldenArrowIcon from "@/svg/org/GoldenArrowIcon";
import TrendCard from "@/ui/trend-card/TrendCard";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CurrentTrends() {
    const navigate = useRouter();
    const handleView = () => {
        navigate.push("/trends")
    }
    return <div className="section-base-bg current-trends-section-base">
        <div className="section-frame">
            <div className="current-trends-path-container">
                <div className="section-content-title-wrapper justify-center">
                    <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                    <h2 className="section-content-title">Current Market <span>Trends   </span></h2>
                </div>
                <div className="current-trends-path-card-wrapper">
                    {
                        Array(6).fill("").map((_, i) => (
                            <TrendCard
                                key={`trend-card-${i + 1}`}
                                tag={"FX BROKER"}
                                title={"Building a Recruitment Strategy for Forex Brokers"}
                                para={"How FX companies can design hiring frameworks to attract experienced trading and sales professionals."}
                                btnText={"Read Full Article "}
                                btnClick={() => { }}
                            />
                        ))
                    }
                </div>
                <div className="flex justify-center">
                    <button type="button" className="next-hire-view-btn" onClick={handleView}>View All <GoldenArrowIcon /></button>
                </div>
            </div>
        </div>
    </div>
}
