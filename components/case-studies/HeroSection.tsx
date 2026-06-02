"use client";

import ButtonAction from "@/ui/buttons/ButtonAction";


export default function HeroSection({router}: {router: any}) {
    return (
        <div className="case-study-hero-section-base">
            <div className="section-frame">
                <div className="hero-content-wrapper">
                    {/* <h2 className="section-content-title">Current Market Trends</h2> */}
                    <h2 className="section-content-title">Case <span> Studies</span></h2>
                    <div className="hero-para-wrapper">
                        <p className="case-study-hero-para">Practical stories highlighting how strategic hiring and talent decisions shape stronger careers and help businesses achieve better performance, scalability, and long-term growth in dynamic financial and high-growth sectors.</p>
                    </div>
                    <div className="hero-btn-group">
                        <ButtonAction
                            type="primary"
                            text="Book a Strategy Call"
                            onClick={() => router.push("/contact-us") }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
