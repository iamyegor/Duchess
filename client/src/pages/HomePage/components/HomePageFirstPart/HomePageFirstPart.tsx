import memberImage from "@/assets/homePage/home-page-member.webp";
import DuchessLogo from "@/components/ui/DuchessLogo";
import gymBgImg from "@/pages/HomePage/components/HomePageFirstPart/assets/gym-bg.webp";
import useHomePageTranslation from "./hooks/useHomePageTranslation";

export default function HomePageFirstPart({ onButtonClick }: { onButtonClick: () => void }) {
    const t = useHomePageTranslation();

    return (
        <div className="relative h-[720px] w-full overflow-hidden lg:h-screen lg:max-h-[900px] lg:min-h-[620px]">
            <div className="absolute inset-0 w-full h-full ">
                <img
                    src={gymBgImg}
                    alt={t.placeholders.gymImageAlt}
                    className="h-full w-full object-cover opacity-75"
                />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.94)_0%,rgba(5,5,5,0.78)_38%,rgba(5,5,5,0.26)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
            <div className="absolute left-0 top-28 hidden h-36 w-[46vw] -skew-x-12 border-y border-default/50 bg-default/10 lg:block" />
            <div className="container relative z-20 flex h-full w-full flex-col pt-4 lg:space-x-10 lg:pt-32 xs:pb-0">
                <DuchessLogo theme="light" />
                <div className="flex h-full w-full items-center justify-center lg:justify-between">
                    <div className="du-animate-rise w-full max-w-[690px] lg:mb-8">
                        <span className="du-kicker">24/7 fitness club</span>
                        <h1 className="du-display mb-6 text-[76px] text-paper sm:text-[104px] lg:text-[132px]">
                            {t.title}
                        </h1>
                        <p className="mb-12 max-w-xl border-l border-paper/20 pl-5 text-base leading-7 text-paper/72">
                            {t.description}
                        </p>
                        <button
                            onClick={onButtonClick}
                            className="du-button w-full text-center text-sm tracking-[0.14em] lg:w-[360px]"
                        >
                            {t.buttonText}
                        </button>
                    </div>
                    <div
                        className="hidden h-full min-h-[500px] flex-1 flex-shrink-0 items-end justify-end lg:flex"
                        style={{ aspectRatio: "9/16" }}
                    >
                        <img
                            className="h-full drop-shadow-[0_28px_80px_rgba(255,119,0,0.18)]"
                            src={memberImage}
                            alt={t.placeholders.memberImageAlt}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
