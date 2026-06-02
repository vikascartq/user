import LocationPinIcon from "@/svg/opportunity/LocationPinIcon";
import SearchIcon from "@/svg/opportunity/SearchIcon";
import ButtonAction from "@/ui/buttons/ButtonAction";

interface OpportunitiesFilterProps {
    searchValue: string;
    locationValue: string;
    onSearchChange: (value: string) => void;
    onLocationChange: (value: string) => void;
    onApply: () => void;
}

export default function OpportunitiesFilter({
    searchValue,
    locationValue,
    onSearchChange,
    onLocationChange,
    onApply
}: OpportunitiesFilterProps) {
    return (
        <div className="opportunity-filter-base">
            <div className="opportunity-field-divider"></div>
            <div className="opportunity-field-wrapper">
                <SearchIcon />
                <input
                    type="text"
                    placeholder="Job title or keyword"
                    className="opportunity-field"
                    value={searchValue}
                    onChange={(event) => onSearchChange(event.target.value)}
                />
            </div>
            <div className="opportunity-field-divider"></div>
            <div className="opportunity-field-wrapper">
                <LocationPinIcon />
                <input
                    type="text"
                    placeholder="Work Location"
                    className="opportunity-field"
                    value={locationValue}
                    onChange={(event) => onLocationChange(event.target.value)}
                />
            </div>
            <ButtonAction
                text={"Search"}
                type={"primary"}
                onClick={onApply}
            />
        </div>
    )
}
