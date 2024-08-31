import DuchessLogo from "@/components/ui/DuchessLogo";
import promotionImage from "@/assets/promotionsPage/promotion.png";
import { Link } from "react-router-dom";

function PromotionsPage() {
    return (
        <div className="flex flex-col bg-default h-full py-8">
            <DuchessLogo />
            <div className="container h-full space-y-10 flex flex-col">
                <h1 className="text-5xl font-semibold">АКЦИИ</h1>
                <div className="bg-black text-white rounded-xl flex h-auto md:h-[350px] lg:h-[500px] flex-col md:flex-row">
                    <div className="flex-none " style={{ aspectRatio: "1 / 1" }}>
                        <img
                            src={promotionImage}
                            alt="Promotion Image"
                            className="mr-8 w-full h-full rounded-t-xl md:rounded-tr-none md:rounded-l-xl object-cover"
                        />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6 lg:p-8 space-y-4">
                        <div>
                            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                                0₽ на вступительный взнос
                            </h1>
                            <p className="text-xl lg:text-2xl mb-6">
                                Скидка 100% на вступительный взнос при покупке абонемента во всех
                                клубах сети Duchess Fitness.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row justify-between items-center">
                            <span className="text-base">Финальные скидки</span>
                            <Link
                                to="/gyms"
                                className="bg-default hover:bg-default-dark text-black font-semibold py-2 px-7 rounded-lg w-full lg:w-auto"
                            >
                                КУПИТЬ АБОНЕМЕНТ
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PromotionsPage;
