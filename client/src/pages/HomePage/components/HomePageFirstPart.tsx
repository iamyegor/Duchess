import girlImage from "@/assets/homePage/home-page-girl.png";

export default function HomePageFirstPart({ onButtonClick }: { onButtonClick: () => void }) {
    return (
        <div className="container w-full flex xs:pb-0 items-center justify-center md:justify-between min-h-[270px] h-screen max-h-[450px] sm:max-h-[600px] space-x-10">
            <div className="space-y-7 max-w-[600px] 2xl:max-w-[800px]">
                <h1 className="text-3xl xs:text-4xl lg:text-5.5xl font-semibold xl:max-w-full">
                    <span>ЛУЧШИЙ СПОРТЗАЛ МИРА</span>
                    <span className="text-2xl xs:text-3xl align-top">*</span>
                </h1>
                <p className="text-base xs:text-lg md:text-base lg:text-lg">
                    DUCHESS FITNESS — это место, где ваша дисциплина и решимость встречаются с
                    поддержкой и мотивацией. Мы создаем уютную и дружелюбную атмосферу для тех, кто
                    стремится к лучшей версии себя.
                </p>
                <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-4 lg:space-y-0">
                    <button
                        onClick={onButtonClick}
                        className="bg-black/70 p-4 rounded-lg flex-1 hover:shadow-xl hover:bg-black/65 transition text-sm lg:text-lg text-center"
                    >
                        Купить со скидкой
                    </button>
                </div>
            </div>
            <div className="h-full hidden md:flex items-end w-[350px] flex-shrink-0">
                <img className="max-h-full h-full w-full" src={girlImage} alt="Красивая Девушка" />
            </div>
        </div>
    );
}
