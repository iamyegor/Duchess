import { useLanguage } from "@/contexts/LanguageContext";

const translations = [
    {
        locale: "en",
        title: "DUCHESS is...",
        aboutUsContent: [
            {
                title: "MOOD",
                content:
                    "Every day is a chance to change your life, take a step towards health and happiness. A positive mood is the spark that initiates changes for the better. Your mood is the artist creating your life. Let's fill it with bright colors together!",
            },
            {
                title: "COMMUNICATION",
                content:
                    "DUCHESS is the power of a community of people supporting each other, celebrating everyone's successes. Make new acquaintances, share your impressions, learn from others and grow with us. The atmosphere within our walls is the result of strong connections, friendship and mutual respect.",
            },
            {
                title: "RELAXATION",
                content:
                    "After hard work, the best place to relax is DUCHESS FITNESS. Here you will find not only constant movement, but also moments of pause and recovery. In these quiet moments, we find ourselves. Breathe, let go of everything and just live here and now.",
            },
        ],
    },
    {
        locale: "ru",
        title: "DUCHESS - это...",
        aboutUsContent: [
            {
                title: "НАСТРОЕНИЕ",
                content:
                    "В каждом дне - шанс изменить жизнь, сделать шаг в сторону здоровья и счастья. Позитивное настроение - искра, запускающая перемены к лучшему. Ваше настроение - это художник, создающий вашу жизнь. Давайте вместе наполним ее яркими красками!",
            },
            {
                title: "ОБЩЕНИЕ",
                content:
                    "DUCHESS - это сила сообщества людей, поддерживающих друг друга, отмечающих успехи каждого. Заводите знакомства, делитесь своими впечатлениями, учитесь у других и растите вместе с нами. Атмосфера в наших стенах - результат крепких связей, дружбы и взаимного уважения.",
            },
            {
                title: "РАССЛАБЛЕНИЕ",
                content:
                    "После тяжелой работы лучшее место для расслабления - DUCHESS FITNESS. Здесь вы найдете не только постоянное движение, но и моменты паузы и восстановления. В этих тихих моментах мы находим себя. Дышите, отпустите все и просто живите здесь и сейчас.",
            },
        ],
    },
];

export default function useHomePageAboutUsTranslation() {
    const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
