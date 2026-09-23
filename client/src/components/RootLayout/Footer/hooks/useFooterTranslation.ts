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
            programs: "Programs",
            gym: "Gym",
            beginners: "For New Clients",
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
            workouts: "Workouts",
            services: "Services",
            clubMembers: "Club Members",
            forTrainees: "For Trainees",
        },
        subSectionNames: {
            trainers: "Trainers",
            programs: "Programs",
            gym: "Gym",
            beginners: "For New Clients",
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
];

export default function useFooterTranslation() {
    const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
