"use client";
import GoldenSection from "../golden-section/GoldenSection";
import Built from "./Built";
import HeroSection from "./HeroSection";
import HowSupport from "./HowSupport";
import NextHire from "./NextHire";
import "./org.css";
import { useRouter } from "next/navigation";

export default function OrgIndex() {
    const router = useRouter();
    return (
        <>
            <HeroSection router={router} />
            <Built />
            <HowSupport />
            <NextHire />
            <GoldenSection
                title="Start with a Focused Business Conversation"
                para="Every business reaches a point where growth, hiring, team capability, or internal structure needs closer attention. ReqKing takes a practical and structured approach to understanding where your business stands today, what pressures you are facing, and what kind of support will create the strongest next step for your team and your wider growth plans."
                buttonText="Start a Business Conversation"
                para2="Share your challenge, growth plan, or hiring priority and ReqKing will guide you with the right next step."
                onButtonClick={() => router.push("/contact-us")}
            />
        </>
    )
}
