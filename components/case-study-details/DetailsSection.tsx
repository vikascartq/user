import { ICaseStudyContent, ICaseStudyList } from "@/hooks/useCaseStudy";
import { UIEvent } from "react";
import ListItemIcon1 from "@/svg/case-study/ListItemIcon1";
import ListItemIcon10 from "@/svg/case-study/ListItemIcon10";
import ListItemIcon2 from "@/svg/case-study/ListItemIcon2";
import ListItemIcon3 from "@/svg/case-study/ListItemIcon3";
import ListItemIcon4 from "@/svg/case-study/ListItemIcon4";
import ListItemIcon5 from "@/svg/case-study/ListItemIcon5";
import ListItemIcon6 from "@/svg/case-study/ListItemIcon6";
import ListItemIcon7 from "@/svg/case-study/ListItemIcon7";
import ListItemIcon8 from "@/svg/case-study/ListItemIcon8";
import ListItemIcon9 from "@/svg/case-study/ListItemIcon9";
import PremiumCard from "@/ui/premium-card/PremiumCard";
import Image from "next/image";
import { breakParagraph } from "@/utils/utils";


interface IDetailsSectionProps {
    content?: ICaseStudyContent[];
    isLoading?: boolean;
    caseStudyList?: ICaseStudyList[];
    pagination?: any;
    isCaseStudyLoading: boolean;
    isCaseStudyLoadingMore: boolean;
    onLoadMoreCaseStudys?: () => void;
}

export default function DetailsSection({ content, isLoading, caseStudyList, pagination, isCaseStudyLoading, isCaseStudyLoadingMore, onLoadMoreCaseStudys }: IDetailsSectionProps) {
    const hasContent = Array.isArray(content) && content.length > 0;

    const handleFeaturesScroll = (event: UIEvent<HTMLDivElement>) => {
        const target = event.currentTarget;
        const nearBottom = target.scrollHeight - target.scrollTop - target.clientHeight < 100;
        if (nearBottom && pagination?.hasNextPage && !isCaseStudyLoadingMore && !isCaseStudyLoading) {
            onLoadMoreCaseStudys?.();
        }
    };


    return (
        <div className="section-base-bg case-study-details-section-base">
            <div className="section-frame">
                <div className="current-trends-path-container">
                    <div className="case-details-container">
                        <div className="case-details-content">

                            {isLoading ? (
                                <div className="case-details-loading">Loading...</div>
                            ) : hasContent ? (
                                ([...content].sort((a, b) => a.order - b.order).map((c) => (
                                    <div key={c._id}>
                                        <div className="section-content-title-wrapper" >
                                            <Image src={"/dollar.svg"} alt="dollar" className="dollar-img" width={30} height={30} />
                                            <h2 className="section-content-title">{c.title}</h2>
                                        </div>

                                        {breakParagraph(c.description).map((paragraph, idx) => (
                                            <p key={idx} className="case-details-para">{paragraph}</p>
                                        ))}
                                        {/* <p className="case-details-para">{c.description}</p> */}

                                        {c.list.length > 0 && c.list.map((item) => (
                                            <div className="styled-unordered-list-item" key={item.item}>
                                                <div className="styled-unordered-separator"></div>
                                                <ListItemIcon1 />
                                                <div className="styled-unordered-text">{item.item}</div>
                                            </div>
                                        ))}

                                    </div>
                                )))

                            ) : (null)}
                        </div>
                        {/* <div className="case-details-features">
                            <div className="case-details-premium-card-container">
                                <PremiumCard
                                    title="FX BROKER"
                                    para="Complete HR Infrastructure Setup"
                                />
                                <PremiumCard
                                    title="CRYPTO TRADING FIRM"
                                    para="Performance Management Framework"
                                />
                                <PremiumCard
                                    title="GLOBAL FINTECH COMPANY"
                                    para="Culture & Retention Strategy"
                                />
                            </div>
                        </div> */}

                        <div className="case-study-details-features sticky">
                            <div className="case-study-details-features-inner" onScroll={handleFeaturesScroll}>
                                <div className="case-details-premium-card-container"> <>
                                        {isCaseStudyLoading ? (
                                            <div className="trend-list-loading">Loading case studies...</div>
                                        ) : caseStudyList?.length === 0 ? (
                                            <div className="trend-list-empty">No case studies available.</div>
                                        ) : (
                                            <>
                                                {caseStudyList?.map((trend) => (
                                                    <PremiumCard
                                                        key={trend._id}
                                                        title={trend.title.toUpperCase().slice(0, 20)}
                                                        para={trend.description.slice(0, 30)}
                                                    />
                                                ))}
                                            </>
                                        )}

                                        {isCaseStudyLoadingMore && (
                                            <div className="trend-list-loading-more">Loading more...</div>
                                        )}

                                        {pagination?.hasNextPage && (
                                            <button
                                                className="trend-load-more-button"
                                                type="button"
                                                onClick={() => onLoadMoreCaseStudys?.()}
                                                disabled={isCaseStudyLoadingMore || isCaseStudyLoading}
                                            >
                                                Load More Case Studies
                                            </button>
                                        )}
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
