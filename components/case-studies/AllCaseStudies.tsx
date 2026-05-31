import CaseStudyCard from "@/ui/case-study-card/CaseStudyCard";
import { useRouter } from "next/navigation";
import useCaseStudy from "@/hooks/useCaseStudy";

export default function AllCaseStudies() {
    const { caseStudyList, handleGetAllCaseStudies, isLoading, isLoadingMore, pagination, page, getCaseStudyDetails, caseStudyDetail, isDetailLoading, caseStudyNotFound
    } = useCaseStudy();
    const navigate = useRouter();
    const handleView = (id: string) => {
        navigate.push(`/case-studies/${id}`)
    }


    const loadMore = () => {
        const nextPage = (pagination?.currentPage || page) + 1;
        if (pagination?.hasNextPage) {
            handleGetAllCaseStudies(nextPage, pagination?.limit || 10, true);
        }
    }
    return (
        <div className="section-base-bg all-case-studies-section-base">
            <div className="section-frame">
                <div className="current-trends-path-container">
                    <div className="all-case-studies-card-wrapper">
                        {isLoading ? (
                            <div className="trends-initial-loading">
                                Loading...
                            </div>
                        ) : (
                            caseStudyList.map((caseStudy) => (
                                <CaseStudyCard
                                    key={caseStudy._id}
                                    tag={caseStudy.title}
                                    title={
                                        caseStudy.subHeading.slice(0, 35) +
                                        (caseStudy.subHeading.length > 35 ? "..." : "")
                                    }
                                    subTitle="Challenge"
                                    para={
                                        caseStudy.challenge.slice(0, 100) +
                                        (caseStudy.challenge.length > 100 ? "..." : "")
                                    }
                                    para2={
                                        caseStudy.description.slice(0, 100) +
                                        (caseStudy.description.length > 100 ? "..." : "")
                                    }
                                    btnText="View More"
                                    btnClick={() => handleView(caseStudy._id)}
                                />
                            ))
                        )}
                    </div>

                    {!isLoading && pagination?.hasNextPage && (
                        <div className="trends-load-more-wrap flex justify-center">
                            <button
                                className="trends-load-more-btn cursor-pointer"
                                onClick={loadMore}
                                disabled={isLoadingMore || isLoading}
                            >
                                {isLoadingMore ? "Loading..." : "Load More"}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
