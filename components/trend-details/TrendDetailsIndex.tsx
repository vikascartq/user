"use client";
import GoldenSection from "../golden-section/GoldenSection";
import DetailSection from "./DetailSection";
import HeroSection from "./HeroSection";
import "./trend-details.css";

export default function TrendDetailsIndex({
    trendId
}: { trendId: string }) {
    console.log("trendId", trendId);

    return (
        <>
            <HeroSection />
            <DetailSection />
            <GoldenSection
                title="Better Insight Leads to Better Decisions"
                para="Whether you are building a team, considering a move, or trying to understand where the market is heading, the right insight can create a real advantage. ReqKing shares practical thinking shaped by commercial reality, talent trends, and growth-stage experience across demanding sectors. Reach us to know more."
                buttonText="Reach us to know more"
                onButtonClick={() => ""}
            />
        </>
    )
}
