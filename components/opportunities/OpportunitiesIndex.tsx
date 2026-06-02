"use client";
import GoldenSection from "../golden-section/GoldenSection";
import HeroSection from "./HeroSection";
import "./opportunities.css";
import OpportunitiesCards from "./OpportunitiesCards";
import { useRouter } from "next/navigation";

export default function OpportunitiesIndex() {
    const router = useRouter();
    return (
        <>
            <HeroSection router={router} />
            <OpportunitiesCards router={router} />
            <GoldenSection
                title="Looking for a Role Where You Can Truly Grow?"
                para="ReqKing works closely with decision-makers, hiring managers, and senior leaders who are actively building teams and looking for the right people to move their business forward. That direct access allows us to support candidates with more relevant opportunities, stronger market insight, and a more focused approach throughout the process, so your next move is not just another job application but a step toward the right long-term fit."
                buttonText="Share Your Profile"
                onButtonClick={() => router.push("/contact-us?type=job")}
            />
        </>
    )
}
