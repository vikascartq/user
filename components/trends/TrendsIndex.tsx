"use client";

import GoldenSection from "../golden-section/GoldenSection";
import AllTrends from "./AllTrends";
import HeroSection from "./HeroSection";
import "./trends.css";

export default function TrendsIndex() {
    return (
        <>
            <HeroSection />
            <AllTrends />
            <GoldenSection
                title="Stay Closer to What the Market Is Telling You"
                para="Markets move quickly, and so do hiring expectations, talent behaviour, and business priorities. ReqKing follows these shifts closely to help businesses and professionals understand what matters, what is changing, and where stronger decisions can create better outcomes. If you would like to explore these topics further, reach us to know more."
                buttonText="Reach us to know more"
                onButtonClick={() => ""}
            />
        </>
    )
}
