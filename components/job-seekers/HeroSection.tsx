"use client";

import ButtonAction from "@/ui/buttons/ButtonAction";

export default function HeroSection({router}: {router:any}) {
    return (
        <div className="job-seekers-hero-section-base">
            <div className="section-frame page-hero-frame">
                <div className="hero-content-wrapper">
                    <h2 className="section-content-title">Helping ambitious professionals move </h2>
                    <h2 className="section-content-title"><span> with more strategy</span></h2>
                    <div className="hero-para-wrapper">
                        <p className="job-seekers-hero-para">ReqKing supports job seekers who want more than job alerts. The focus is on stronger positioning, better access, sharper preparation, and more confidence in finding the right opportunity.</p>
                    </div>
                    <div className="hero-btn-group">
                        <ButtonAction
                            type="primary"
                            text="Share Your Profile"
                            onClick={() => router.push("/contact-us?type=job")}
                        />
                        <ButtonAction
                            type="outline"
                            text="Book a Career Consultation"
                            onClick={() => router.push("/contact-us")}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
