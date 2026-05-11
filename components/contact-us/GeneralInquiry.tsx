import ButtonAction from "@/ui/buttons/ButtonAction";
import InputField from "@/ui/input/InputField";
import TextAreaField from "@/ui/input/TextAreaField";

export default function GeneralInquiry() {
    return (
        <div className="general-inquiry-form">
            <div className="form-field-group">
                <InputField
                    type="text"
                    label={"Your Name"}
                    placeholder={"Enter Your Name"}
                    id={"name"}
                    onChange={() => { }}
                />
                <InputField
                    type="email"
                    label={"Email address"}
                    placeholder={"Enter Email address"}
                    id={"email"}
                    onChange={() => { }}
                />
            </div>
            <div className="form-field-group">
                <InputField
                    type="number"
                    label={"Phone number"}
                    placeholder={"Enter Phone number"}
                    id={"phoneNumber"}
                    onChange={() => { }}
                />
                <InputField
                    type="text"
                    label={"Company name"}
                    placeholder={"Enter Company name"}
                    id={"companyName"}
                    onChange={() => { }}
                />
            </div>
            <div className="form-field-group">
                <TextAreaField
                    label={"Your Message"}
                    placeholder={"Enter Your Message"}
                    id={"email"}
                    onChange={() => { }}
                    rows={4}
                />
            </div>
            <ButtonAction
                type="primary"
                text="Submit"
                onClick={() => ""}
            />
        </div>
    )
}
