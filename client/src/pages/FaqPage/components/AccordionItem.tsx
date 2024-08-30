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
        <Accordion square={true}>
            <AccordionSummary expandIcon={<PlusSvg className="fill-default-lighter w-10 h-10" />}>
                <p className="text-default-lighter text-lg xs:text-xl font-medium">{question}</p>
            </AccordionSummary>
            <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
    );
}
