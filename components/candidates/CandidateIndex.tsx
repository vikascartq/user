"use client";

import GoldenSection from "../golden-section/GoldenSection";
import CandidateCards from "./CandidateCards";
import HeroSection from "./HeroSection";
import "./candidates.css";
import { useRouter } from "next/navigation";

export default function CandidateIndex() {
    const router = useRouter();
    return (
        <>
            <HeroSection router={router} />
            <CandidateCards router={router} />
            <GoldenSection
                title=" Looking for Talent That Can Truly Add Value?"
                para="ReqKing’s network is built around credible, high-performing professionals, not just active applicants searching for any next move. We stay connected with talent that is already delivering results across multi-asset trading, fintech, financial services, technology, operations, risk, payments, cyber security, data, and other specialist functions, giving businesses access to stronger profiles with greater long-term potential."
                buttonText="Request specific talent support"
                onButtonClick={() => router.push('contact-us?type=business#contact-form-section-base')}
            />
        </>
    )
}
