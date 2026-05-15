import useJobEnquiry from "@/hooks/useJobEnquiry";
import UploadIcon from "@/svg/contact-us/UploadIcon";
import ButtonAction from "@/ui/buttons/ButtonAction";
import InputField from "@/ui/input/InputField";
import TextAreaField from "@/ui/input/TextAreaField";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "PDF"];

export default function ForJob() {
    const { formik, isLoading } = useJobEnquiry();
    return (
        <div className="general-inquiry-form">
            <div className="form-field-group">
                <InputField
                    type="text"
                    label={"Full Name of the person"}
                    placeholder={"Enter Your Full Name"}
                    id={"name"}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <InputField
                    type="text"
                    label={"Official email address"}
                    placeholder={"Enter Email address"}
                    id={"email"}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>
            <div className="form-field-group">
                <InputField
                    type="number"
                    label={"WhatsApp Number"}
                    placeholder={"Enter WhatsApp Number"}
                    id={"whatsAppNumber"}
                    onChange={formik.handleChange}
                    value={formik.values.whatsAppNumber}
                />
                <InputField
                    type="text"
                    label={"Current / Last Company Name"}
                    placeholder={"Enter Company Name"}
                    id={"companyName"}
                    onChange={formik.handleChange}
                    value={formik.values.companyName}
                />
            </div>
            <div className="form-field-group">
                <InputField
                    type="text"
                    label={"Current / Last Job Title"}
                    placeholder={"Enter Job Title"}
                    id={"jobTitle"}
                    onChange={formik.handleChange}
                    value={formik.values.jobTitle}
                />
                <InputField
                    type="text"
                    label={"Expected Salary"}
                    placeholder={"Enter Expected Salary"}
                    id={"expectedSalary"}
                    onChange={formik.handleChange}
                    value={formik.values.expectedSalary}
                />
            </div>
            <div className="form-field-group">
                <InputField
                    type="text"
                    label={"Current Location"}
                    placeholder={"Enter Current Location"}
                    id={"currentLocation"}
                    onChange={formik.handleChange}
                    value={formik.values.currentLocation}
                />
                <InputField
                    type="text"
                    label={"Interested Job Title"}
                    placeholder={"Enter Your Interested Job Title"}
                    id={"interestedJobTitle"}
                    onChange={formik.handleChange}
                    value={formik.values.interestedJobTitle}
                />
            </div>
            <div className="form-field-group">
                <TextAreaField
                    label={"Brief Work Experience"}
                    placeholder={"Brief Your Work Experience"}
                    id={"workExperienceInBrief"}
                    onChange={formik.handleChange}
                    value={formik.values.workExperienceInBrief}
                    rows={4}
                />
            </div>
            <div className="form-field-group">
                <div className="file-upload-field">
                    <div className="file-upload-label">Upload CV</div>
                    <FileUploader
                        handleChange={(event: File | File[]) => {
                            // const files = event ? Array.from(event as File[]) : [];
                            formik.setFieldValue("cv", event);
                        }}
                        name="file"
                        types={fileTypes}
                        onTypeError={(e: string) => {
                            console.log(e);
                        }}
                        // multiple
                        // disabled={isBusinessUser ? false : isAutoFill}
                        classes="disabled:opacity-50"
                    >
                        <div className="file-upload-container">
                            <button type="button" className="file-upload-btn"><UploadIcon /> Upload</button>
                            <div className="file-upload-para1">Choose a file or drag & drop it here</div>
                            <div className="file-upload-para2">Maximum 500 MB  file size</div>
                        </div>
                    </FileUploader>
                    <div className="text-[14px] mt-2">{formik.values.cv?.name}</div>
                </div>
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
