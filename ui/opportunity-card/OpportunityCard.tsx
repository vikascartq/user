"use client";
import GreenDotIcon from "@/svg/GreenDotIcon";
import LocationPinIcon from "@/svg/LocationPinIcon";
import ButtonAction from "../buttons/ButtonAction";
import "./opportunity-card.css";

export default function OpportunityCard({ title, location, tags, onApply }: OpportunityCardProps) {
    const visibleTags = tags.slice(0, 4);
    const overflowCount = tags.length - 4;

    return (
        <div className="opportunity-card">
            <div className="opportunity-card-header">
                <div className="opportunity-card-title-row">
                    <span className="opportunity-card-status-dot" />
                    <h4 className="opportunity-card-title">
                        <GreenDotIcon />
                        <span>{title}</span>
                    </h4>
                </div>
                <p className="opportunity-card-location">
                    <LocationPinIcon />
                    <span>{location}</span>
                </p>
            </div>

            <div className="opportunity-card-divider" />

            <div className="opportunity-card-body">
                <div className="opportunity-card-tags">
                    {visibleTags.map((tag, i) => (
                        <span className="opportunity-card-tag" key={i}>{tag}</span>
                    ))}
                    {overflowCount > 0 && (
                        <span className="opportunity-card-tag overflow-tag">+{overflowCount} more</span>
                    )}
                </div>
            </div>

            <div className="opportunity-card-footer">
                <ButtonAction
                    type="primary"
                    text="Apply Now"
                    onClick={onApply}
                />
            </div>
        </div>
    )
}

interface OpportunityCardProps {
    title: string;
    location: string;
    tags: string[];
    onApply: () => void;
}
