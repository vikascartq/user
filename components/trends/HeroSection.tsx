"use client";


export default function HeroSection() {
    return (
        <div className="case-study-hero-section-base">
            <div className="section-frame page-hero-frame">
                <div className="hero-content-wrapper">
                    {/* <h2 className="section-content-title">Current Market Trends</h2> */}
                    <h2 className="section-content-title">Current Market <span>Trends</span></h2>
                    <div className="hero-para-wrapper">
                        <p className="case-study-hero-para">Insights on evolving talent strategies, market expectations, and growth dynamics across financial markets and high-growth industries, helping professionals make better career decisions and enabling businesses to build stronger, more effective teams.</p>
                    </div>
                    {/* <div className="hero-btn-group">
                        <ButtonAction
                            type="primary"
                            text="Book a Strategy Call"
                            onClick={() => { }}
                        />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
