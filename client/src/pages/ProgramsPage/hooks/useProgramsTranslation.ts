import { useLanguage } from "@/contexts/LanguageContext";

const translations = [
    {
        locale: "en",
        title: "Life in the rhythm of DUCHESS FITNESS",
        description:
            "DUCHESS FITNESS - your path to perfect shape. Various programs, modern equipment, and experienced trainers will help you find your rhythm of life. Health, beauty, and energy await you. Discover the best version of yourself!",
        gymTitle: "DUCHESS FITNESS Gym",
        gymContent:
            "The DUCHESS FITNESS gym is a unique space that combines everything you need to achieve your goals! Each DUCHESS gym is equipped with modern, high-performance cardio equipment and unrivaled strength and functional training equipment from the American brand Matrix.",
        trainerTitle: "Personal Training",
        trainerContent:
            "Personal training is a quick way to achieve your goal! Working with a trainer not only creates a personal training plan but also provides you with an individual approach and safety on both physical and emotional levels.",
        spaTitle: "DUCHESS FITNESS SPA",
        spaContent:
            "Enjoy complete relaxation in our DUCHESS SPA complex. Unload yourself from the stresses of everyday life and relax after an intense workout.",
    },
    {
        locale: "ru",
        title: "Жизнь в ритме DUCHESS FITNESS",
        description:
            "DUCHESS FITNESS - ваш путь к идеальной форме. Разнообразные программы, современное оборудование и опытные тренеры помогут найти ваш ритм жизни. Здоровье, красота и энергия ждут вас. Откройте лучшую версию себя!",
        gymTitle: "Тренажерный зал DUCHESS FITNESS",
        gymContent:
            "Тренажерный зал DUCHESS FITNESS - уникальное пространство, которое сочетает все необходимое для достижения ваших целей! Каждый зал DUCHESS оснащен современным, высокопроизводительным кардиооборудованием и непревзойденными тренажерами для силового и функционального тренинга от американского бренда Matrix.",
        trainerTitle: "Персональные тренировки",
        trainerContent:
            "Персональные тренировки - это быстрый путь к поставленной цели! Работа с тренером формирует не только личный план тренировок, но и обеспечивает вам индивидуальный подход и безопасность на физическом и эмоциональном уровне.",
        spaTitle: "DUCHESS FITNESS SPA",
        spaContent:
            "Насладитесь полной релаксацией в нашем DUCHESS SPA комплексе. Разгрузите себя от стрессов повседневной жизни и расслабьтесь после интенсивной тренировки.",
    },
];

export default function useProgramsTranslation() {
    const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
