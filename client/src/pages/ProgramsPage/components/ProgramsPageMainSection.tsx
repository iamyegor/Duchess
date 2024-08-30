import mainPageImage from "@/assets/programsPage/programs-page.png";
import DuchessLogo from "@/components/ui/DuchessLogo.tsx";

export default function ProgramsPageMainSection() {
    return (
        <div className="flex flex-col pt-2 items-center relative h-[650px]">
            <DuchessLogo whiteVariant={true} />
            <div className="absolute inset-0">
                <img
                    src={mainPageImage}
                    alt="Основная картинка"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="z-10 container h-full flex items-end xs:items-center p-4">
                <div className="flex flex-col justify-start lg:max-w-[650px] md:bg-black/40 md:backdrop-blur-xl md:p-10 rounded-xl space-y-8 md:border border-neutral-800">
                    <h1 className="text-2xl xs:text-3xl sm:text-5xl font-bold mb-4">Жизнь в ритме DUCHESS FITNESS</h1>
                    <button className="px-6 py-4 border rounded-xl border-white hover:bg-white hover:text-black transition">
                        Купить абонемент
                    </button>
                </div>
            </div>
        </div>
    );
}
