import GoldenListDotIcon from "@/svg/GoldenListDotIcon";
import "./service-card-box.css";
export default function ServiceCardBox({ title, description, supportTitle, support, icon }: ServiceCardBoxProps) {
    return (
        <div className="service-card-box">
            {icon}
            <h4 className="service-card-title">{title}</h4>
            <p className="service-card-description">{description}</p>
            <div className="service-card-support-title">{supportTitle}</div>
            <ul className="service-card-support-list">
                {support.map((item, index) => (
                    <li key={index}>
                        <GoldenListDotIcon />
                        <span className="service-card-support-item">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

interface ServiceCardBoxProps {
    title: string;
    description: string;
    supportTitle: string;
    support: string[];
    icon?: React.ReactNode;
}