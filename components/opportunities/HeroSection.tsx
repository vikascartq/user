"use client";

import ButtonAction from "@/ui/buttons/ButtonAction";

export default function HeroSection({ router }: { router: any }) {
    return (
        <div className="opportunities-hero-section-base">
            <div className="section-frame">
                <div className="hero-content-wrapper">
                    <h2 className="section-content-title">Discover Roles That</h2>
                    <h2 className="section-content-title"><span> Fit You</span></h2>
                    <div className="hero-para-wrapper">
                        <p className="opportunities-hero-para">ReqKing helps candidates discover the right roles that match their skills and career goals – apply easily and connect with businesses that are ready to hire.</p>
                    </div>
                    <div className="hero-btn-group">
                        <ButtonAction
                            type="primary"
                            text="Book a Strategy Call"
                            onClick={() => router.push("/contact-us")}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
