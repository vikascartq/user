"use client";

import GoldenSection from "../golden-section/GoldenSection";
import "./case-studies.css";
import CurrentTrends from "./CurrentTrends";
import HeroSection from "./HeroSection";
export default function CaseStudiesIndex() {
    return (
        <>
            <HeroSection />
            <CurrentTrends />
            <GoldenSection
                title="Insights That Support Better Hiring and Better Growth"
                para="ReqKing shares practical insight for both businesses and professionals navigating fast-moving markets. From people strategy and hiring trends to talent movement, market direction, AI, data, and operational growth, our goal is to bring useful thinking that helps you make stronger decisions with more confidence."
                buttonText="Reach us to know more"
                onButtonClick={() => ""}
            />
        </>
    )
}
