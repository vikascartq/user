"use client";

import GoldenSection from "../golden-section/GoldenSection";
import AllCaseStudies from "./AllCaseStudies";
import HeroSection from "./HeroSection";
import "./all-case-studies.css";
import { useRouter } from "next/navigation";
export default function CaseStudiesIndex() {
    const router = useRouter();
    return (
        <>
            <HeroSection router={router} />
            <AllCaseStudies />
            <GoldenSection
                title="Let’s Explore What Your Business Needs Next"
                para="If your organisation is focused on strengthening talent, improving team structure, or supporting the next stage of growth, ReqKing can help you assess the situation with greater clarity. We work with businesses to understand the real requirement behind the brief and shape a practical approach that supports stronger hiring, stronger teams, and better long-term execution."
                buttonText="Discuss Your Requirements"
                onButtonClick={() => router.push("/contact-us") }
            />
        </>
    )
}
