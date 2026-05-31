"use client";
import type { ITrendDetail } from "@/hooks/useTrends";

export default function HeroSection({ hero, isLoading }: { hero?: ITrendDetail | undefined, isLoading?: boolean }) {
    return (
        <div className="trend-details-hero-section-base">
            <div className="section-frame">
                <div className="hero-content-wrapper">
                    {isLoading ? (
                        <div className="hero-loading">Loading...</div>
                    ) : (
                        <>
                            <h2 className="section-content-title">{hero?.title || ""}</h2>
                            <h2 className="section-content-title"><span>{hero?.subHeading || ""}</span></h2>
                            <div className="hero-para-wrapper">
                                <p className="trend-details-hero-para">{hero?.description || ""}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
