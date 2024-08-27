import girlImage from "@/assets/homePage/home-page-girl.png";
import { Link } from "react-router-dom";
export default function HomePage() {
    return (
        <div className="flex flex-col bg-default h-full">
            <Link to="/" className="text-4xl font-thin text-center p-5">
                DUCHESS FITNESS
            </Link>
            <div className="w-full h-[500px] sm:h-[600px] bg-default flex items-center justify-center md:justify-between lg:justify-center space-x-0 lg:space-x-20 px-10">
                <div className="space-y-7 max-w-full md:max-w-[350px] lg:max-w-[500px]">
                    <h1 className="text-[28px] xs:text-[40px] lg:text-[48px] font-semibold">
                        ЛУЧШИЙ СПОРТЗАЛ МИРА
                    </h1>
                    <p className="text-base xs:text-lg md:text-base lg:text-lg">
                        ДУМАЕТЕ КРИПТЁШЬ? НЕТ, ЭТО ДЮШЕС
                    </p>
                    <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-4 lg:space-y-0">
                        <button className="bg-black/70 p-4 lg:p-2 rounded-lg flex-1 hover:shadow-lg transition text-sm lg:text-base">
                            ОСТАВИТЬ ЗАЯВКУ
                        </button>
                        <button className="border hover:border-white/70 hover:text-white/70 p-4 lg:p-2 rounded-lg flex-1 transition text-sm lg:text-base">
                            КУПИТЬ СО СКИДКОЙ
                        </button>
                    </div>
                </div>
                <div className="h-full hidden md:flex justify-center items-center">
                    <img className="max-h-full w-full" src={girlImage} alt="Красивая Девушка" />
                </div>
            </div>
        </div>
    );
}
