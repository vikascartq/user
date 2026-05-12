import GoldenArrowIcon from "@/svg/org/GoldenArrowIcon";
import "./trend-card.css";

export default function TrendCard({
    tag,
    title,
    para,
    btnText,
    btnClick
}: TrendCardProps) {
    return (
        <div className="trend-card">
            <div className="trend-card-tag">{tag}</div>
            <h4 className="trend-card-title">{title}</h4>
            <p className="trend-card-para">{para}</p>
            <div className="trend-card-divider"></div>
            <button type="button" onClick={btnClick} className="trend-card-cta">
                {btnText}
                <GoldenArrowIcon />
            </button>
        </div>
    )
}

interface TrendCardProps {
    tag: string;
    title: string;
    para: string;
    btnText: string;
    btnClick: () => void;
}