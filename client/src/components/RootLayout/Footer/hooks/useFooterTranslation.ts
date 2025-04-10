import { useLanguage } from "@/contexts/LanguageContext";

const translations = [
    {
        locale: "en",
        sectionNames: {
            workouts: "Workouts",
            services: "Services",
            clubMembers: "Club Members",
            forTrainees: "For Trainees",
        },
        subSectionNames: {
            trainers: "Trainers",
            gym: "Gym",
            groupWorkouts: "Group Workouts",
            onlineWorkouts: "Online Workouts",
            outdoorGroupWorkouts: "Outdoor Group Workouts",
            functionalTraining: "Functional Training",
            strengthTraining: "Strength Training",
            fitnessTesting: "Fitness Testing",
            studentWorkouts: "Student Workouts",
            schedule: "Schedule",
            saunasAndHammam: "Saunas and Hammam",
            affordableMemberships: "Affordable Memberships",
            singleVisit: "Single Visit",
            fitnessForTeenagers: "Fitness for Teenagers",
            memberships: "Memberships",
            partnersAndPrivileges: "Partners and Privileges",
            faq: "FAQ",
            promotions: "Promotions",
            duchessTV: "Duchess TV",
            events: "Events",
        },
    },
    {
        locale: "ru",
        sectionNames: {
            workouts: "Тренировки",
            services: "Услуги",
            clubMembers: "Членам клуба",
            forTrainees: "Тренирующемся",
        },
        subSectionNames: {
            trainers: "Тренеры",
            gym: "Тренажерный зал",
            groupWorkouts: "Групповые тренировки",
            onlineWorkouts: "Тренировки онлайн",
            outdoorGroupWorkouts: "Групповые тренировки на улице",
            functionalTraining: "Функциональные тренировки",
            strengthTraining: "Силовые тренировки",
            fitnessTesting: "Фитнес-тестирование",
            studentWorkouts: "Тренировки для студентов",
            schedule: "Расписание",
            saunasAndHammam: "Сауны и хаммам",
            affordableMemberships: "Недорогие абонементы",
            singleVisit: "Разовое посещение",
            fitnessForTeenagers: "Фитнес для подростков",
            memberships: "Абонементы",
            partnersAndPrivileges: "Партнёры и привилегии",
            faq: "FAQ",
            promotions: "Акции",
            duchessTV: "Duchess TV",
            events: "Мероприятия",
        },
    },
];

export default function useFooterTranslation() {
    const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
