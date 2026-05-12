"use client";

import GoldenSection from "../golden-section/GoldenSection";
import "./case-study-detail.css";
import DetailsSection from "./DetailsSection";
import HeroSection from "./HeroSection";

export default function CaseStudyDetailsIndex({ caseStudyId }: { caseStudyId: string }) {
    console.log("caseStudyId", caseStudyId);

    return (
        <>
            <HeroSection />
            <DetailsSection />
            <GoldenSection
                title="Real Growth Challenges Need Practical Solutions"
                para="Every case study reflects more than a hiring need or business request. It reflects the wider challenge behind growth, whether that is talent, structure, leadership pressure, or execution. If you want to explore how similar thinking could support your business or career direction, reach us to know more."
                buttonText="Reach us to know more"
                onButtonClick={() => ""}
            />
        </>
    )
}
