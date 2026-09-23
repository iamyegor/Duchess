import DuchessLogo from "@/components/ui/DuchessLogo";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import promotionEnImage from "@/pages/PromotionsPage/assets/promotion-en.webp";
import usePromotionsPageTranslation from "./hooks/usePromotionsPageTranslation";

function PromotionsPage() {
    const { uiLanguage } = useLanguage();
    const [promotionImage, setPromotionImage] = useState(promotionEnImage);

    useEffect(() => {
        setPromotionImage(promotionEnImage);
    }, [uiLanguage]);

    const t = usePromotionsPageTranslation();

    return (
        <div className="du-page flex h-full flex-col pb-10 pt-4 lg:pt-28">
            <DuchessLogo theme="light" />
            <div className="container flex h-full flex-col space-y-10">
                <div>
                    <span className="du-kicker">limited pass</span>
                    <h1 className="du-display text-[76px] text-paper xs:text-[104px]">
                        {t.promotions}
                    </h1>
                </div>
                <div className="du-panel flex h-auto flex-col overflow-hidden rounded-sm text-paper md:h-[370px] md:flex-row lg:h-[520px]">
                    <div className="flex-none" style={{ aspectRatio: "1 / 1" }}>
                        <img
                            src={promotionImage}
                            alt="Promotion Image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-1 flex-col justify-between space-y-4 p-6 lg:p-10">
                        <div>
                            <h1 className="du-display mb-5 text-6xl lg:text-8xl">
                                {t.noEntryFee}
                            </h1>
                            <p className="mb-6 max-w-xl text-[20px] leading-8 text-paper/70">
                                {t.discountDescription}
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
                            <span className="border-l-4 border-acid pl-4 text-base font-bold text-paper/80">
                                {t.finalDiscounts}
                            </span>
                            <Link
                                to="/gyms"
                                className="du-button w-full px-8 py-3 text-center text-sm lg:w-auto"
                            >
                                {t.buyMembership}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PromotionsPage;
