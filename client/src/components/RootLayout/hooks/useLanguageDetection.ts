import { useState, useEffect } from "react";

export type Language = "en" | "ru";

export default function useLanguageDetection() {
    const [language, setLanguage] = useState<Language>("en");

    useEffect(() => {
        const detectLanguage = () => {
            const primaryLanguage =
                navigator.language ||
                (Array.isArray(navigator.languages) ? navigator.languages[0] : "en");

            const russianLanguages = ["ru", "ru-RU", "ru-UA", "ru-KZ", "ru-BY"];

            const isRussianPreferred =
                russianLanguages.includes(primaryLanguage) || primaryLanguage.startsWith("ru-");

            const detectedLanguage: Language = isRussianPreferred ? "ru" : "en";

            setLanguage(detectedLanguage);
        };

        detectLanguage();
    }, []);

    return language;
}
