"use client";

import ButtonAction from "@/ui/buttons/ButtonAction";

export default function HeroSection({ router }: { router: any }) {
    return (
        <div className="job-seekers-hero-section-base">
            <div className="section-frame">
                <div className="hero-content-wrapper">
                    <h2 className="section-content-title">Ready-to-Deploy</h2>
                    <h2 className="section-content-title"><span> Talent Pool</span></h2>
                    <div className="hero-para-wrapper">
                        <p className="job-seekers-hero-para">ReqKing helps businesses connect with pre-vetted, hire-ready professionals who can join immediately, so you can scale faster without hiring delays.</p>
                    </div>
                    <div className="hero-btn-group">
                        <ButtonAction
                            type="primary"
                            text="Book a Strategy Call"
                            onClick={() => router.push('contact-us')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
