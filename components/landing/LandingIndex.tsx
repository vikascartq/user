"use client";
import GoldenSection from "../golden-section/GoldenSection";
import Built from "./Built";
import Candidate from "./Candidate";
import FinTech from "./FinTech1";
import Global from "./Global";
import Help from "./Help";
import HeroSection from "./HeroSection";
import "./landing.css";
import Opportunity from "./Opportunity";
import Testimonials from "./Testimonials";
import WhyChoose from "./WhyChoose";
import WorkWith from "./WorkWith.";
import {  useRouter } from "next/navigation";

export default function LandingIndex() {
    const router = useRouter();
    return (
        <>
            <HeroSection />
            <Built />
            <Help />
            <WorkWith />
            <Global />
            <WhyChoose />
            <FinTech />
            <Opportunity  />
            <Candidate />
            <Testimonials />
            <GoldenSection
                title="Building Growth Is Easier with the Right People Behind It"
                para="If you are building, strengthening, or scaling within fintech, multi-asset trading, digital assets, financial services, or other fast-moving industries, ReqKing is here to support the people side of that journey. From finding the right talent to bringing more structure to hiring and growth decisions, we help businesses move forward with greater clarity, confidence, and consistency."
                buttonText="Speak with Reqking"
                onButtonClick={() => router.push("/contact-us")}
            />
        </>
    )
}
