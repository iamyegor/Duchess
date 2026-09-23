import { MenuItem, Select, SelectChangeEvent, styled } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowDownSvg from "@/assets/homePage/arrow-down.svg?react";

const StyledSelect = styled(Select)({
    backgroundColor: "#171714",
    color: "#fff7e8",
    borderRadius: "2px",
    padding: "8px 16px",
    fontFamily: "Commissioner, sans-serif",
    fontWeight: 700,
    ".MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(255, 247, 232, 0.15)",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#FF7700",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(255, 119, 0, 0.7)",
    },
    "& .MuiSelect-select": {
        padding: "8px 16px",
        minHeight: "20px",
    },
    "&:hover": {
        backgroundColor: "#22221e",
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
            borderRadius: "2px",
            backgroundColor: "#11110f",
            border: "1px solid rgba(255, 247, 232, 0.12)",
        },
    },
};

const StyledMenuItem = styled(MenuItem)({
    marginTop: "4px",
    padding: "8px 16px",
    color: "#fff7e8",
    borderRadius: "2px",
    backgroundColor: "#11110f",
    fontFamily: "Commissioner, sans-serif",
    "&:hover": {
        backgroundColor: "rgba(255, 119, 0, 0.22) !important",
    },
    "&.Mui-selected": {
        backgroundColor: "rgba(184, 255, 88, 0.14) !important",
    },
});

export default function SelectComponent({
    values,
    onChange,
    defaultValue,
    currentValue,
}: {
    values: string[];
    onChange: (event: SelectChangeEvent<unknown>) => void;
    defaultValue?: string;
    currentValue?: string;
}) {
    const selectedValue = currentValue ?? values[0];
    const [value, setValue] = useState<string>(selectedValue);

    useEffect(() => {
        setValue(selectedValue);
    }, [selectedValue]);

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        onChange(event);

        setValue(event.target.value as string);
    };

    return (
        <StyledSelect
            value={value}
            onChange={handleChange}
            MenuProps={menuProps}
            className="w-full"
            defaultValue={defaultValue}
            IconComponent={() => <ArrowDownSvg className="fill-default w-6 h-6" />}
        >
            {defaultValue ? (
                <StyledMenuItem disabled key={defaultValue} value={defaultValue}>
                    {defaultValue}
                </StyledMenuItem>
            ) : null}

            {values.map((value) => (
                <StyledMenuItem key={value} value={value}>
                    {value}
                </StyledMenuItem>
            ))}
        </StyledSelect>
    );
}
