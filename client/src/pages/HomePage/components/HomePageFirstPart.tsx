import girlImage from "@/assets/homePage/home-page-girl.png";

export default function HomePageFirstPart() {
    return (
        <div className="container w-full flex items-end pb-7 xs:pb-0 xs:items-center justify-center md:justify-between min-h-[270px] h-screen max-h-[350px] sm:max-h-[600px] space-x-10">
            <div className="space-y-7">
                <h1 className="text-[28px] xs:text-[40px] lg:text-5.5xl font-semibold max-w-[500px]">
                    ЛУЧШИЙ СПОРТЗАЛ МИРА
                </h1>
                <p className="text-base xs:text-lg md:text-base lg:text-lg">
                    ДУМАЕТЕ КРИПТЁШЬ? НЕТ, ЭТО ДЮШЕС
                </p>
                <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-4 lg:space-y-0">
                    <button className="bg-black/70 p-4 rounded-lg flex-1 hover:shadow-xl hover:bg-black/65 transition text-sm lg:text-base">
                        ОСТАВИТЬ ЗАЯВКУ
                    </button>
                </div>
            </div>
            <div className="h-full hidden md:flex justify-center items-center">
                <img className="max-h-full w-full" src={girlImage} alt="Красивая Девушка" />
            </div>
        </div>
    );
}
