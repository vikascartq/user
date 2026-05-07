"use client";

import ButtonAction from "@/ui/buttons/ButtonAction";

export default function HeroSection() {
    return (
        <div className="org-hero-section-base">
            <div className="section-frame">
                <div className="hero-content-wrapper">
                    <h2 className="section-content-title"> People Strategy for Businesses That Want </h2>
                    <h2 className="section-content-title"><span> to Grow with Structure</span></h2>
                    <div className="hero-para-wrapper">
                        <p className="org-hero-para">ReqKing helps businesses strengthen the people side of growth, from hiring and workforce planning to structure, support, and execution. The goal is to make sure growth is backed by the right talent, clearer decisions, and stronger foundations rather than leaving leadership teams to solve people issues reactively.</p>
                    </div>
                    <div className="hero-btn-group">
                        <ButtonAction
                            type="primary"
                            text="Book A Strategy Call"
                            onClick={() => { }}
                        />
                        <ButtonAction
                            type="outline"
                            text="Explore Services"
                            onClick={() => { }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
