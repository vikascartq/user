import useTrends from "@/hooks/useTrends";
import GoldenArrowIcon from "@/svg/org/GoldenArrowIcon";
import TrendCard from "@/ui/trend-card/TrendCard";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CurrentTrends() {
    const { trendsList } = useTrends();
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
                        trendsList.slice(0, 6).map((trend) => (
                            <TrendCard
                                key={trend._id}
                                tag={trend.title}
                                title={trend.subHeading.slice(0, 55) + (trend.subHeading.length > 55 ? "..." : "")}
                                para={trend.description}
                                btnText={"Read Full Article "}
                                btnClick={() => navigate.push(`/trends/${trend._id}`)}
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
