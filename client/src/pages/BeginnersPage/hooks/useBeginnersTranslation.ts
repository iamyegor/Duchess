import { useLanguage } from "@/contexts/LanguageContext";

const translations = [
    {
        locale: "en",
        mainTitle: "DUCHESS FITNESS NEW PLACE OF ATTRACTION",
        mainDescription:
            "DUCHESS FITNESS is a new center of attraction for fitness enthusiasts. Unique atmosphere, advanced technologies, and professional approach. Here, everyone will find their path to perfection. Become part of our community and achieve goals together!",
        newbiesTitle: "If you're starting, start with DUCHESS FITNESS",
        newbiesContent:
            "Everyone came to the gym for the first time once. They, just like you, experienced fear of the gym, worried about sideways glances. DUCHESS FITNESS is a place of support and your motivation. Our team will accompany you all the way. Be sure of it! Below you will find information about what will be available to you at DUCHESS FITNESS.",
        introTitle: "DUCHESS INTRO program for beginners",
        introContent:
            "To make your start easy and your workouts enjoyable and effective, we have created the DUCHESS INTRO program for you! This is your free starter kit for safe and comfortable workouts in the gym, which will help beginners start their journey or help those who are already training to achieve their goals faster. You can sign up for DUCHESS INTRO workouts at the club reception or in the mobile app.",
    },
    {
        locale: "ru",
        mainTitle: "DUCHESS FITNESS НОВОЕ МЕСТО ПРИТЯЖЕНИЯ",
        mainDescription:
            "DUCHESS FITNESS - новый центр притяжения для любителей фитнеса. Уникальная атмосфера, передовые технологии и профессиональный подход. Здесь каждый найдет свой путь к совершенству. Станьте частью нашего сообщества и достигайте целей вместе!",
        newbiesTitle: "Если начинать, то с DUCHESS FITNESS",
        newbiesContent:
            "Каждый человек пришел когда-то в зал впервые. Он также, как и ты, испытывал страх перед тренажерным залом, переживал за косые взгляды со стороны. DUCHESS FITNESS - место поддержки и твоей мотивации. Наша команда будет сопровождать тебя на всем пути. Будь уверен в этом! Ниже ты найдешь информацию о том, что тебе будет доступно в DUCHESS FITNESS.",
        introTitle: "Программа DUCHESS INTRO для начинающих",
        introContent:
            "Чтобы ваш старт был легким, а тренировки приносили удовольствие и результат, мы создали для вас программу DUCHESS INTRO! Это ваш стартовый бесплатный набор для безопасных и комфортных тренировок в тренажерном зале, который поможет начать путь новичкам или быстрее достичь поставленных целей тем, кто уже занимается. Записаться на тренировки DUCHESS INTRO можно на ресепшене клуба или в мобильном приложении.",
    },
];

export default function useBeginnersTranslation() {
    const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
