import useTrends from "@/hooks/useTrends";
import GoldenArrowIcon from "@/svg/org/GoldenArrowIcon";
import TrendCard from "@/ui/trend-card/TrendCard";
import { useRouter } from "next/navigation";

export default function AllTrends() {
    const { trendsList, handleGetAllTrends, isLoading, isLoadingMore, pagination, page } = useTrends();
    const navigate = useRouter();
    const handleView = (trendId: string) => {
        navigate.push(`/trends/${trendId}`)
    }
    const loadMore = () => {
        const nextPage = (pagination?.currentPage || page) + 1;
        if (pagination?.hasNextPage) {
            handleGetAllTrends(nextPage, pagination?.limit || 10, true);
        }
    }
    return (
        <div className="section-base-bg all-trends-section-base">
            <div className="section-frame">
                <div className="current-trends-path-container">
                    <div className="all-trends-card-wrapper">
                        {isLoading ? (
                            <div className="trends-initial-loading">Loading...</div>
                        ) : (
                            trendsList.map((trend) => (
                                <TrendCard
                                    key={trend._id}
                                    tag={trend.title}
                                    title={trend.subHeading.slice(0, 50) + (trend.subHeading.length > 50 ? "..." : "")}
                                    para={trend.description}
                                    btnText={"Read Full Article "}
                                    btnClick={() => handleView(trend._id)}
                                />
                            ))
                        )}
                    </div>
                    {!isLoading && pagination?.hasNextPage && (
                        <div className="trends-load-more-wrap flex justify-center">
                            <button
                                className="load-more-btn cursor-pointer"
                                onClick={loadMore}
                                disabled={isLoadingMore || isLoading}
                            >
                                {isLoadingMore ? (
                                    "Loading..."
                                ) : (
                                    <>
                                        View More <GoldenArrowIcon />
                                    </>
                                )}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
