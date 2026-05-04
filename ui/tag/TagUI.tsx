import "./tag-ui.css";
export default function TagUI({ text, startIcon, endIcon }: TagUIProps) {
    return (
        <div className="tag-ui">
            {startIcon && <span className="tag-ui-start-icon">{startIcon}</span>}
            {text}
            {endIcon && <span className="tag-ui-end-icon">{endIcon}</span>}
        </div>
    )
}

interface TagUIProps {
    text: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}