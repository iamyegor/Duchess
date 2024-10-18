import girlImage from "@/assets/homePage/home-page-girl.png";
import DuchessLogo from "@/components/ui/DuchessLogo";
import gymBgImg from "./assets/gym-bg.png";
import useHomePageTranslation from "./hooks/useHomePageTranslation";

export default function HomePageFirstPart({ onButtonClick }: { onButtonClick: () => void }) {
    const t = useHomePageTranslation();

    return (
        <div className="h-[700px] lg:min-h-[500px] lg:h-screen lg:max-h-[900px] relative overflow-hidden w-full">
            <div className="absolute inset-0 w-full h-full ">
                <img
                    src={gymBgImg}
                    alt={t.placeholders.gymImageAlt}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="container pt-4 lg:pt-32 flex flex-col xs:pb-0 w-full h-full lg:space-x-10 relative z-20">
                <DuchessLogo theme="light" />
                <div className="flex items-center justify-center lg:justify-between h-full w-full">
                    <div className="w-[600px] lg:mb-8">
                        <h1 className="text-[40px] xs:text-[50px] font-semibold xl:max-w-full mb-4 leading-[1.1] tracking-tight">
                            {t.title}
                        </h1>
                        <p className="text-[16px] mb-12">{t.description}</p>
                        <button
                            onClick={onButtonClick}
                            className="bg-default w-full lg:w-[400px] p-4 rounded-lg flex-1 hover:shadow-xl hover:bg-default-dark transition text-base text-center"
                        >
                            {t.buttonText}
                        </button>
                    </div>
                    <div
                        className="h-full min-h-[500px] flex-1 hidden lg:flex items-end justify-end flex-shrink-0"
                        style={{ aspectRatio: "9/16" }}
                    >
                        <img
                            className="h-full"
                            src={girlImage}
                            alt={t.placeholders.girlImageAlt}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
