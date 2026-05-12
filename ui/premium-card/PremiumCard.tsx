import "./premium-card.css";

export default function PremiumCard({
    title,
    para
}: PremiumCardProps) {
    return (
        <div className="premium-card">
            <div className="premium-card-title">{title}</div>
            <div className="premium-card-para">{para}</div>
        </div>
    )
}

interface PremiumCardProps {
    title: string;
    para: string;
}