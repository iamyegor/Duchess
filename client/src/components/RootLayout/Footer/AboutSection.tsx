import gDigitalLogo from "@/assets/g-digital/g-digital-logo.png";

export default function AboutSection() {
    return (
        <div className="space-y-7">
            <h3 className="font-medium italic text-3xl">Мы - Duchess Fitness</h3>
            <p>
                Duchess Fitness - это современное пространство для вашего активного образа жизни. Мы
                предлагаем разнообразные тренировки и качественное оборудование, подходящее для
                любых целей. У нас каждый найдет занятия, которые помогут достигнуть желаемых
                результатов и поддерживать форму. Атмосфера в зале способствует продуктивным
                тренировкам, а наш дружелюбный персонал всегда готов помочь вам на пути к успеху.
            </p>
            <div className="block 2xl:flex 2xl:space-x-3 text-sm xl:text-base ">
                <p className="font-semibold italic whitespace-nowrap">8 800 777-4-999</p>
                <p className="text-neutral-400 whitespace-nowrap">7:00 – 22:00 МСК</p>
            </div>
            
        </div>
    );
}
