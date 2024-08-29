import DuchessLogo from "@/components/ui/DuchessLogo";
import promotionsImage from "@/assets/promotionsPage/promotions.jpg";

function PromotionsPage() {
    return (
        <div className="flex flex-col bg-default h-full py-8">
            <DuchessLogo />
            <div className="container h-full space-y-10 flex flex-col">
                <h1 className="text-5xl font-semibold">АКЦИИ</h1>
                <div className="bg-black text-white rounded-xl flex h-auto md:h-[400px] lg:h-[500px] flex-col md:flex-row">
                    <div className="flex-none md:flex-1 h-[500px] md:h-full">
                        <img
                            src={promotionsImage}
                            alt="Promotion Image"
                            className="mr-8 w-full h-full rounded-t-xl md:rounded-tr-none md:rounded-l-xl object-cover"
                        />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-8 space-y-4">
                        <div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                                0₽ на вступительный взнос
                            </h1>
                            <p className="text-xl lg:text-2xl mb-6">
                                Скидка 100% на вступительный взнос при покупке абонемента во всех
                                клубах сети Duchess Fitness.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between items-center">
                            <span className="text-sm lg:text-base">19 АВГУСТА 2024</span>
                            <button
                                className="bg-default hover:bg-default-dark text-black font-semibold py-2 px-5 rounded-lg w-full sm:w-auto"
                                onClick={() => alert("Абонемент куплен!")}
                            >
                                КУПИТЬ АБОНЕМЕНТ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PromotionsPage;
