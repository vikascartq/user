import useGeneralEnquiry from "@/hooks/useGeneralEnquiry";
import ButtonAction from "@/ui/buttons/ButtonAction";
import InputField from "@/ui/input/InputField";
import TextAreaField from "@/ui/input/TextAreaField";

export default function GeneralInquiry() {
    const { formik, isLoading } = useGeneralEnquiry();
    return (
        <div className="general-inquiry-form">
            <div className="form-field-group">
                <InputField
                    type="text"
                    label={"Your Name"}
                    placeholder={"Enter Your Name"}
                    id={"name"}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <InputField
                    type="email"
                    label={"Email address"}
                    placeholder={"Enter Email address"}
                    id={"email"}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>
            <div className="form-field-group">
                <InputField
                    type="number"
                    label={"Phone number"}
                    placeholder={"Enter Phone number"}
                    id={"phoneNumber"}
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                />
                <InputField
                    type="text"
                    label={"Company name"}
                    placeholder={"Enter Company name"}
                    id={"companyName"}
                    onChange={formik.handleChange}
                    value={formik.values.companyName}
                />
            </div>
            <div className="form-field-group">
                <TextAreaField
                    label={"Your Message"}
                    placeholder={"Enter Your Message"}
                    id={"message"}
                    onChange={formik.handleChange}
                    rows={4}
                    value={formik.values.message}
                />
            </div>
            <ButtonAction
                type="primary"
                text="Submit"
                onClick={formik.submitForm}
                isDisabled={isLoading}
            />
        </div>
    )
}
