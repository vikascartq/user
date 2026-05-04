import "./section-frame.css";
export default function SectionFrame({
    type,
    imgNode,
    contentNode
}: SectionFrameProps) {
    return (
        <>
            <div className="section-frame">
                <div className={`section-container ${type === "reverse" ? "reversed-container" : ""}`}>
                    <div className="section-container__img-side">{imgNode}</div>
                    <div className="section-container__content-side">{contentNode}</div>
                </div>
            </div>
        </>
    )
}

interface SectionFrameProps {
    type: "reverse" | "default";
    imgNode: React.ReactNode;
    contentNode: React.ReactNode;
}