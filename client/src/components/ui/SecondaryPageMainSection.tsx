import DuchessLogo from "@/components/ui/DuchessLogo.tsx";

interface SecondaryPageMainSectionProps {
    img: string;
    title: string;
}

export default function SecondaryPageMainSection({ img, title }: SecondaryPageMainSectionProps) {
    return (
        <div className="flex flex-col pt-2 items-center relative h-[650px]">
            <DuchessLogo whiteVariant={true} />
            <div className="absolute inset-0">
                <img src={img} alt="Основная картинка" className="w-full h-full object-cover" />
            </div>
            <div className="z-10 container h-full flex items-end xs:items-center p-4">
                <div className="flex flex-col justify-start lg:max-w-[650px]  space-y-8">
                    <h1 className="text-2xl xs:text-3xl sm:text-5xl font-bold mb-4">{title}</h1>
                    <button className="px-6 py-4 border rounded-xl bg-white text-black hover:bg-gray-100 hover:shadow-2xl transition">
                        Купить абонемент
                    </button>
                </div>
            </div>
        </div>
    );
}
