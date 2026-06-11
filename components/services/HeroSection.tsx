"use client";

import ButtonAction from "@/ui/buttons/ButtonAction";

import { useRouter } from "next/navigation";
export default function HeroSection() {
    const router = useRouter();
    return (
        <div className="service-hero-section-base">
            <div className="section-frame page-hero-frame">
                <div className="hero-content-wrapper">
                    <h2 className="section-content-title"> Our <span>Services</span></h2>
                    <div className="hero-para-wrapper">
                        <p className="service-hero-para">ReqKing partners with businesses to build strong foundations across talent, capability and organisational effectiveness.</p>
                        <p className="service-hero-para">We help ensure growth is driven with clarity, efficiency and the right people in place at every stage.</p>
                    </div>
                    <ButtonAction
                        type="primary"
                        text="Book A Strategy Call"
                        onClick={() => router.push("/contact-us")}
                    />
                </div>
            </div>
        </div>
    )
}
