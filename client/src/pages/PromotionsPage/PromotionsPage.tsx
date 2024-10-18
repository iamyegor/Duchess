import DuchessLogo from "@/components/ui/DuchessLogo";
import promotionRuImage from "./assets/promotion-ru.png";
import promotionEnImage from "./assets/promotion-en.png";
import { Link } from "react-router-dom";
import usePromotionsPageTranslation from "./hooks/usePromotionsPageTranslation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

function PromotionsPage() {
    const { uiLanguage } = useLanguage();
    const [promotionImage, setPromotionImage] = useState(promotionRuImage);

    useEffect(() => {
        if (uiLanguage === "ru") {
            setPromotionImage(promotionRuImage);
        } else {
            setPromotionImage(promotionEnImage);
        }
    }, [uiLanguage]);

    const t = usePromotionsPageTranslation();

    return (
        <div className="flex flex-col pt-4 lg:pt-24 bg-black h-full pb-10">
            <DuchessLogo theme="light"/>
            <div className="container h-full space-y-10 flex flex-col">
                <h1 className="text-[42px] xs:text-[50px] font-semibold">{t.promotions}</h1>
                <div className="bg-neutral-950 border border-neutral-700 text-white rounded-xl flex h-auto md:h-[350px] lg:h-[500px] flex-col md:flex-row">
                    <div className="flex-none " style={{ aspectRatio: "1 / 1" }}>
                        <img
                            src={promotionImage}
                            alt="Promotion Image"
                            className="mr-8 w-full h-full rounded-t-xl md:rounded-tr-none md:rounded-l-xl object-cover"
                        />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6 lg:p-8 space-y-4">
                        <div>
                            <h1 className="text-3xl lg:text-5xl font-bold mb-4">{t.noEntryFee}</h1>
                            <p className="text-[20px] mb-6">{t.discountDescription}</p>
                        </div>
                        <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row justify-between items-center">
                            <span className="text-base">{t.finalDiscounts}</span>
                            <Link
                                to="/gyms"
                                className="bg-default hover:default-dark font-semibold py-3 px-8 rounded-lg w-full lg:w-auto text-center"
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
