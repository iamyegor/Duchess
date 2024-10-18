import useLanguageDetection, { Language } from "@/components/RootLayout/hooks/useLanguageDetection";
import { createContext, ReactNode, useContext } from "react";

interface LanguageContextType {
    uiLanguage: Language;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const uiLanguage = useLanguageDetection();

    return <LanguageContext.Provider value={{ uiLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
