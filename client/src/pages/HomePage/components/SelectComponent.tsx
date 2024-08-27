import { MenuItem, Select, SelectChangeEvent, styled } from "@mui/material";
import { useState } from "react";
import ArrowDownSvg from "@/assets/homePage/arrow-down.svg?react";

const StyledSelect = styled(Select)({
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: "12px",
    padding: "8px 16px",
    ".MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(228, 219, 233, 0.25)",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(228, 219, 233, 0.25)",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(228, 219, 233, 0.25)",
    },
    "& .MuiSelect-select": {
        padding: "8px 16px",
        minHeight: "20px",
    },
    "&:hover": {
        backgroundColor: "#444",
    },
    "& .MuiSvgIcon-root": {
        color: "#F95700",
    },
});

const menuProps = {
    PaperProps: {
        style: {
            padding: "0px 8px 0 8px",
            marginTop: "4px",
            borderRadius: "12px",
            backgroundColor: "#333",
        },
    },
};

const StyledMenuItem = styled(MenuItem)({
    marginTop: "4px",
    padding: "8px 16px",
    color: "#fff",
    borderRadius: "8px",
    backgroundColor: "#333",
    "&:hover": {
        backgroundColor: "#666 !important",
    },
    "&.Mui-selected": {
        backgroundColor: "#555 !important",
    },
});

export default function SelectComponent({ values }: { values: string[] }) {
    const [value, setValue] = useState(values[0]);

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        setValue(event.target.value as string);
    };

    return (
        <StyledSelect
            id="city-select"
            value={value}
            onChange={handleChange}
            MenuProps={menuProps}
            className="w-full"
            IconComponent={() => <ArrowDownSvg className="fill-default w-6 h-6" />}
        >
            {values.map((value) => (
                <StyledMenuItem key={value} value={value}>
                    {value}
                </StyledMenuItem>
            ))}
        </StyledSelect>
    );
}
