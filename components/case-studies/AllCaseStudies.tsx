import CaseStudyCard from "@/ui/case-study-card/CaseStudyCard";
import { useRouter } from "next/navigation";
import useCaseStudy from "@/hooks/useCaseStudy";
import { sliceCharacters } from "@/utils/utils";
import GoldenArrowIcon from "@/svg/org/GoldenArrowIcon";

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
                                        sliceCharacters(caseStudy.subHeading, 35)
                                    }
                                    subTitle="Challenge"
                                    para={
                                        sliceCharacters(caseStudy.challenge, 100)
                                    }
                                    para2={
                                        sliceCharacters(caseStudy.description, 80)
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
                                className="load-more-btn cursor-pointer"
                                onClick={loadMore}
                                disabled={isLoadingMore || isLoading}
                            >
                                {isLoadingMore ? "Loading..." : (<>
                                    View More <GoldenArrowIcon />
                                </>)}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
