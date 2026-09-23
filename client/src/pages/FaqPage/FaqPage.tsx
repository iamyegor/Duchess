// components/FaqPage.tsx
import DuchessLogo from "@/components/ui/DuchessLogo.tsx";
import AccordionItem from "@/pages/FaqPage/components/AccordionItem.tsx";
import useFaqTranslation from "./hooks/useFaqTranslation";

export default function FaqPage() {
    const translation = useFaqTranslation();

    return (
        <div className="du-page h-full pt-4 lg:pt-28">
            <div className="container my-6">
                <DuchessLogo theme="light" />
                <div className="mb-8">
                    <span className="du-kicker">questions</span>
                    <h1 className="du-display text-7xl text-paper sm:text-9xl">FAQ</h1>
                </div>
                <div className="space-y-3">
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
