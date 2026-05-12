import ButtonAction from "../buttons/ButtonAction";
import "./case-study-card.css";

export default function CaseStudyCard({
    tag,
    title,
    subTitle,
    para,
    para2,
    btnText,
    btnClick
}: CaseStudyCardProps) {
    return (
        <div className="case-study-card">
            <div className="case-study-card-tag">{tag}</div>
            <h4 className="case-study-card-title">{title}</h4>
            <h6 className="case-study-card-subtitle">{subTitle}</h6>
            <p className="case-study-card-para">{para}</p>
            <div className="case-study-card-divider"></div>
            <p className="case-study-card-para2">{para2}</p>
            <ButtonAction
                text={btnText}
                type={"primary"}
                onClick={btnClick}
            />
        </div>
    )
}

interface CaseStudyCardProps {
    tag: string;
    title: string;
    subTitle: string;
    para: string;
    para2: string;
    btnText: string;
    btnClick: () => void;
}