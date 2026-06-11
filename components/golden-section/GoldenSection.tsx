import ButtonAction from "@/ui/buttons/ButtonAction";
import "./golden-section.css";
export default function GoldenSection({
    title,
    para,
    para2,
    buttonText,
    onButtonClick
}: GoldenSectionProp) {
    return (
        <div className="golden-section-base">
            <div className="section-frame">
                <div className="golden-section-container">
                    <div className="golden-section-header">
                        <h4>{title}</h4>
                    </div>
                    <div className="golden-section-content">
                        <p>{para}</p>
                        {
                            para2 &&
                            <p>{para2}</p>
                        }
                    </div>
                    <div className="golden-section-footer">
                        <ButtonAction
                            text={buttonText}
                            type={"dark"}
                            onClick={onButtonClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

interface GoldenSectionProp {
    title: string;
    para: string;
    para2?: string;
    buttonText: string;
    onButtonClick: () => void;
}
