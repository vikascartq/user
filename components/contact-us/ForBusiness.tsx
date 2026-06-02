import useBusinessEnquiry from "@/hooks/useBusinessEnquiry";
import ButtonAction from "@/ui/buttons/ButtonAction";
import InputField from "@/ui/input/InputField";
import { Label, ListBox, Select } from "@heroui/react";
export default function ForBusiness() {
    const { formik, isLoading } = useBusinessEnquiry();
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
            </div>
            <div className="form-field-group">
                <InputField
                    type="number"
                    label={"Contact number"}
                    placeholder={"Enter Contact number"}
                    id={"contactNumber"}
                    onChange={formik.handleChange}
                    value={formik.values.contactNumber}
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
                    type="text"
                    label={"Company Name"}
                    placeholder={"Enter Company Name"}
                    id={"companyName"}
                    onChange={formik.handleChange}
                    value={formik.values.companyName}
                />
                <Select
                    name="service"
                    className="w-full text-white"
                    placeholder="Select Required services"
                    aria-label="required-services"
                    value={formik.values.service}
                    onChange={(key) => {
                        formik.setFieldValue("service", key);
                    }}
                >
                    <Label>Required services</Label>

                    <Select.Trigger className="bg-zinc-900 border-0 rounded-md px-3 py-2 flex items-center justify-between hover:bg-zinc-800 contact__select__trigger">
                        <Select.Value className="text-[#FFFFFFB2]" />
                        <Select.Indicator className="text-zinc-400" />
                    </Select.Trigger>

                    <Select.Popover className="bg-zinc-900 border border-zinc-700 rounded-md shadow-lg">
                        <ListBox className="p-1">
                            {
                                services.map((name, i) => (
                                    <ListBox.Item
                                        key={`services-${i + 1}`}
                                        id={name}
                                        textValue={name}
                                        className="text-white px-3 py-2 rounded hover:bg-zinc-800 cursor-pointer flex items-center justify-between"
                                    >
                                        {name}
                                        <ListBox.ItemIndicator className="text-blue-400" />
                                    </ListBox.Item>
                                ))
                            }
                        </ListBox>
                    </Select.Popover>
                </Select>
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


const services = [
  "Human Resources",
  "Talent Acquisition and Recruitment",
  "Salary Benchmarking and Recruitment Budgeting",
  "Employee Relations",
  "Business Performance",
  "Business Growth",
  "Strategy Making",
  "New Business Development",
];