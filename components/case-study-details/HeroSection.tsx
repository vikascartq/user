"use client";

interface IHeroSectionProps {
    title?: string;
    subHeading?: string;
    isLoading?: boolean;
}

export default function HeroSection({ title, subHeading, isLoading }: IHeroSectionProps) {
    return (
        <div className="case-study-hero-section-base">
            <div className="section-frame page-hero-frame">
                <div className="hero-content-wrapper">



                    {isLoading ? (
                        <div className="hero-loading">Loading...</div>
                    ) : (
                        <>
                            <h2 className="section-content-title">{title}</h2>
                            <div className="hero-para-wrapper">
                                <p className="case-study-hero-para">{subHeading}</p>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}
