import ButtonAction from "@/ui/buttons/ButtonAction";
import InputField from "@/ui/input/InputField";
import { Label, ListBox, Select } from "@heroui/react";
export default function ForBusiness() {
    return (
        <div className="general-inquiry-form">
            <div className="form-field-group">
                <InputField
                    type="text"
                    label={"Full Name of the person"}
                    placeholder={"Enter Your Full Name"}
                    id={"name"}
                    onChange={() => { }}
                />
            </div>
            <div className="form-field-group">
                <InputField
                    type="number"
                    label={"Contact number"}
                    placeholder={"Enter Contact number"}
                    id={"phoneNumber"}
                    onChange={() => { }}
                />
                <InputField
                    type="text"
                    label={"Official email address"}
                    placeholder={"Enter Email address"}
                    id={"companyName"}
                    onChange={() => { }}
                />
            </div>
            <div className="form-field-group">
                <InputField
                    type="number"
                    label={"Company Name"}
                    placeholder={"Enter Contact number"}
                    id={"phoneNumber"}
                    onChange={() => { }}
                />
                <Select
                    className="w-full text-white"
                    placeholder="Select Required services"
                >
                    <Label>Required services</Label>
                    <Select.Trigger className="bg-zinc-900 border-0 rounded-md px-3 py-2 flex items-center justify-between hover:bg-zinc-800 contact__select__trigger">
                        <Select.Value className={"text-[#FFFFFFB2]"} />
                        <Select.Indicator className="text-zinc-400" />
                    </Select.Trigger>

                    <Select.Popover className="bg-zinc-900 border border-zinc-700 rounded-md shadow-lg">
                        <ListBox className="p-1">
                            <ListBox.Item
                                id="florida"
                                textValue="Florida"
                                className="text-white px-3 py-2 rounded hover:bg-zinc-800 cursor-pointer flex items-center justify-between"
                            >
                                Florida
                                <ListBox.ItemIndicator className="text-blue-400" />
                            </ListBox.Item>

                            <ListBox.Item
                                id="delaware"
                                textValue="Delaware"
                                className="text-white px-3 py-2 rounded hover:bg-zinc-800 cursor-pointer flex items-center justify-between"
                            >
                                Delaware
                                <ListBox.ItemIndicator className="text-blue-400" />
                            </ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>
            </div>
            <ButtonAction
                type="primary"
                text="Submit"
                onClick={() => ""}
            />
        </div>
    )
}
