"use client";

import { useEffect } from "react";
import GoldenSection from "../golden-section/GoldenSection";
import "./case-study-detail.css";
import DetailsSection from "./DetailsSection";
import HeroSection from "./HeroSection";
import useCaseStudy from "@/hooks/useCaseStudy";
import { useRouter } from "next/navigation";

export default function CaseStudyDetailsIndex({ caseStudyId }: { caseStudyId: string }) {
    const router = useRouter();
    const { caseStudyList, handleGetAllCaseStudies, getCaseStudyDetails, isLoading, isLoadingMore, page, limit, pagination, caseStudyDetail, isDetailLoading, caseStudyNotFound } = useCaseStudy();


     useEffect(() => {
            if (caseStudyId) {
                getCaseStudyDetails(caseStudyId);
            }
        }, [caseStudyId]);
    
        const loadMoreCaseStudies = () => {
            const nextPage = (pagination?.currentPage || page) + 1;
            if (pagination?.hasNextPage) {
                handleGetAllCaseStudies(nextPage, pagination?.limit || limit, true);
            }
        };
    
        if (!isDetailLoading && caseStudyNotFound) {
            return (
                <div className="section-frame trends-not-found-base">
                    <div className="section-frame">
                        <h2>Case Study does not exist</h2>
                        <p>The requested case study was not found. Please check the URL or choose another case study.</p>
                    </div>
                </div>
            );
        }
    

    return (
        <>
            <HeroSection title={caseStudyDetail?.title} subHeading={caseStudyDetail?.subHeading} isLoading={isDetailLoading} />
            <DetailsSection 
             content={caseStudyDetail?.content}
             isLoading={isDetailLoading}
             caseStudyList={caseStudyList}
             pagination={pagination}
             isCaseStudyLoading={isLoading}
             isCaseStudyLoadingMore={isLoadingMore}
             onLoadMoreCaseStudys={loadMoreCaseStudies}
            
            />
            <GoldenSection
                title="Real Growth Challenges Need Practical Solutions"
                para="Every case study reflects more than a hiring need or business request. It reflects the wider challenge behind growth, whether that is talent, structure, leadership pressure, or execution. If you want to explore how similar thinking could support your business or career direction, reach us to know more."
                buttonText="Reach us to know more"
                onButtonClick={() => router.push('/contact-us')}
            />
        </>
    )
}
