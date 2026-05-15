import BagIcon from "@/svg/opportunity/BagIcon";
import LocationPinIcon from "@/svg/opportunity/LocationPinIcon";
import SearchIcon from "@/svg/opportunity/SearchIcon";
import ButtonAction from "@/ui/buttons/ButtonAction";
import { ListBox, Select } from "@heroui/react";
export default function OpportunitiesFilter() {
    return (
        <div className="opportunity-filter-base">
            <div className="opportunity-field-wrapper">
                <BagIcon />
                <Select
                    className="w-[256px] text-white"
                    placeholder="All Categories"
                    aria-label="all-categories"
                >
                    <Select.Trigger className="bg-zinc-900 border-0 rounded-md px-3 py-2 flex items-center justify-between hover:bg-zinc-800">
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
            <div className="opportunity-field-divider"></div>
            <div className="opportunity-field-wrapper">
                <SearchIcon />
                <input type="text" placeholder="Job title or keyword" className="opportunity-field" />
            </div>
            <div className="opportunity-field-divider"></div>
            <div className="opportunity-field-wrapper">
                <LocationPinIcon />
                <input type="text" placeholder="Work Location" className="opportunity-field" />
            </div>
            <ButtonAction
                text={"Search"}
                type={"primary"}
                onClick={() => ""}
            />
        </div>
    )
}
