import React, { useState } from "react";
import PlusSvg from "@/assets/faqPage/plus.svg?react";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material";

interface AccordionItemProps {
    question: string;
    children: React.ReactNode;
}

const Accordion = styled(MuiAccordion)({
    padding: "16px",
    className: "rounded-xl",
    borderRadius: "1rem",
    "& .MuiAccordionSummary-root": {
        borderRadius: "1rem",
    },
    background: "black",
    color: "white",
});

export default function AccordionItem({ question, children }: AccordionItemProps) {
    return (
        <Accordion square={true} className="bg-neutral-950">
            <AccordionSummary
                expandIcon={<PlusSvg className="fill-default w-10 h-10 bg-neutral-950" />}
                style={{backgroundColor: "#0a0a0a", padding: "15px 30px 15px 30px"}}
            >
                <p className="text-default text-lg font-medium">{question}</p>
            </AccordionSummary>
            <AccordionDetails className="max-w-[550px] mt-[20px]">{children}</AccordionDetails>
        </Accordion>
    );
}
