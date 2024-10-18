// components/FaqPage.tsx
import DuchessLogo from "@/components/ui/DuchessLogo.tsx";
import AccordionItem from "@/pages/FaqPage/components/AccordionItem.tsx";
import useFaqTranslation from "./hooks/useFaqTranslation";

export default function FaqPage() {
    const translation = useFaqTranslation();

    return (
        <div className="bg-black h-full pt-4 lg:pt-24">
            <div className="my-6 container">
                <DuchessLogo theme="light" />
                <div>
                    {translation.faqs.map((faq, index) => (
                        <AccordionItem key={index} question={faq.question}>
                            {faq.answer}
                        </AccordionItem>
                    ))}
                </div>
            </div>
        </div>
    );
}
