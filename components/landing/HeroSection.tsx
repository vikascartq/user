"use client";
import PolygonIcon from "@/svg/PolygonIcon";
import ButtonAction from "@/ui/buttons/ButtonAction";
import {  useRouter } from "next/navigation";

export default function HeroSection() {
    const router = useRouter();

    return (
        <div className="hero-section-base">
            <div className="section-frame hero-section-frame">
                <div className="hero-content-wrapper">
                    
                    <div>

                    <h1 className="hero-title">Build the People Structure That Powers Growth  </h1>
                    <h2 className="hero-title text-gradient"> in Fintech  and Multi-Asset Businesses</h2>

                    </div>
                    <p className="hero-para">High-growth businesses do not usually struggle because of ambition. They struggle when hiring, team structure, leadership demands, and day-to-day people decisions begin to expand faster than the business can support. ReqKing helps businesses build stronger people foundations so growth feels more stable, more intentional, and easier to sustain.</p>
                    <div className="hero-btn-group">
                        <ButtonAction
                            type="primary"
                            text="Book A Strategy Call"
                            onClick={() => router.push("/contact-us")}
                        />
                        <ButtonAction
                            type="outline"
                            text="Explore Services"
                            onClick={() => router.push("/services")}
                        />
                    </div>
                </div>
            </div>
            <div className="hero-bottom-wrapper">
                <PolygonIcon />
                <p className="hero-btm-line">Trusted advisor to founders and leadership teams across global trading firms.</p>
                <PolygonIcon />
            </div>
        </div>
    )
}
