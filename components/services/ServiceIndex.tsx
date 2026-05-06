"use client";
import GoldenSection from "../golden-section/GoldenSection";
import HeroSection from "./HeroSection";
import "./service.css";
import ServiceCards from "./ServiceCards";

export default function ServiceIndex() {
    return (
        <>
            <HeroSection />
            <ServiceCards />
            <GoldenSection
                title="Support That Goes Beyond Hiring"
                para="ReqKing is trusted by growing businesses because the work does not stop at sourcing talent. We help strengthen the wider people foundations behind growth, from hiring strategy and workforce planning to organisational support, leadership alignment, and practical execution. The focus is always on helping businesses build stronger capability, better structure, and more sustainable momentum."
                buttonText="Explore How We Can Help"
                onButtonClick={() => ""}
            />
        </>
    )
}
