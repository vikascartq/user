"use client";
import { useState, useEffect } from "react";
import GreenDotIcon from "@/svg/GreenDotIcon";
import LocationPinIcon from "@/svg/LocationPinIcon";
import ButtonAction from "../buttons/ButtonAction";
import "./feat-card.css";

export default function FeatureCard({ title, location, tags, onApply, type, responsiveType }: FeatureCardProps) {
    const [screenWidth, setScreenWidth] = useState<number>(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        setScreenWidth(window.innerWidth);

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const effectiveType = responsiveType && isMounted && screenWidth <= 767 ? "type2" : type;

    return (
        <div className="feature-card ">
            <div className="feature-card-content">
                <div className="feature-card-title-wrapper">
                    <h4 className="feature-card-title"><GreenDotIcon /> <span>{title}</span></h4>
                    <h6 className="feature-card-subtitle"><LocationPinIcon /> <span>{location}</span></h6>
                </div>
                {
                    effectiveType === "type1" &&
                    <ButtonAction
                        type="primary"
                        text="Apply Now"
                        onClick={onApply}
                    />
                }
            </div>
            <div className="feature-card-divider"></div>
            <div className="feature-card-tag-group" id="feature-card-tag-group-d">
                {tags.map((tag, index) => (
                    <div className="feature-card-tag" key={index}>
                        {tag}
                    </div>
                ))}
            </div>
            {
                effectiveType === "type2" &&
                <div className="feature-card-btn-wrapper">
                    <ButtonAction
                        type="primary"
                        text="Apply Now"
                        onClick={onApply}
                    />
                </div>
            }
        </div>
    )
}

interface FeatureCardProps {
    title: string;
    location: string;
    tags: string[];
    onApply: () => void;
    type: "type1" | "type2";
    responsiveType?: boolean;
}