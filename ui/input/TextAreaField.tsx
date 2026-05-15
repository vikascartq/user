import { ChangeEventHandler } from "react";

export default function TextAreaField({
    id,
    label,
    placeholder,
    onChange,
    rows,
    value
}: TextAreaFieldProp) {
    return (
        <div className="input-field-wrap">
            <label htmlFor={id} className="input-field-label-text">{label}</label>
            <textarea
                id={id}
                name={id}
                value={value}
                placeholder={placeholder}
                className="input-field"
                onChange={onChange}
                rows={rows}
            />
        </div>
    )
}


interface TextAreaFieldProp {
    id: string;
    placeholder: string;
    label: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement, HTMLTextAreaElement> | undefined;
    rows: number;
    value: string;
}