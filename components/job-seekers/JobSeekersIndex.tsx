"use client";
import GoldenSection from "../golden-section/GoldenSection";
import HeroSection from "./HeroSection";
import HowSupport from "./HowSupport";
import "./job-seekers.css";
import JobExpect from "./JobExpect";
import Opportunity from "./Opportunity";
import Support from "./Support";
import WhoThis from "./WhoThis";
import {useRouter } from "next/navigation";

export default function JobSeekersIndex() {
     const router = useRouter();
    return (
        <>
            <HeroSection router={router} />
            <Support />
            <HowSupport />
            <JobExpect />
            <WhoThis />
            <Opportunity />
            <GoldenSection
                title="Take the Next Step with More Clarity"
                para="A strong career move starts with a clearer understanding of where you stand and where you want to go next. Whether you need support identifying the right opportunities, improving your profile, preparing for interviews, understanding your market value, or building a more focused career plan, ReqKing helps you move forward with greater confidence, direction, and purpose."
                buttonText="Share Your Profile"
                onButtonClick={() => ""}
            />
        </>
    )
}
