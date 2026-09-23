import React from "react";
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
    padding: "0",
    borderRadius: "2px",
    border: "1px solid rgba(255, 247, 232, 0.12)",
    overflow: "hidden",
    "& .MuiAccordionSummary-root": {
        borderRadius: "2px",
    },
    background: "#11110f",
    color: "#fff7e8",
});

export default function AccordionItem({ question, children }: AccordionItemProps) {
    return (
        <Accordion square={true}>
            <AccordionSummary
                expandIcon={<PlusSvg className="h-10 w-10 fill-default" />}
                style={{ backgroundColor: "#11110f", padding: "20px 30px" }}
            >
                <p className="text-lg font-bold text-paper">{question}</p>
            </AccordionSummary>
            <AccordionDetails className="mt-[10px] max-w-[720px] leading-7 text-paper/70">
                {children}
            </AccordionDetails>
        </Accordion>
    );
}
