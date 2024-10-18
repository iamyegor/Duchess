import { useLanguage } from "@/contexts/LanguageContext";

const translations = [
    {
        locale: "en",
        faqs: [
            {
                question: "How to subscribe?",
                answer: (
                    <div className="space-y-7">
                        <p>
                            You can subscribe on the website on the subscription page or in the
                            mobile application. If you have any questions, contact the reception
                            staff.
                        </p>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>
                                Enter your phone number, choose a club for training, and select the
                                start date.
                            </li>
                            <li>Fill in all necessary personal details.</li>
                            <li>
                                Pay for the subscription with a bank card: the first payment
                                consists of the initiation fee and the cost of the monthly
                                subscription. From the second month, you only pay the subscription
                                cost.
                            </li>
                            <li>
                                Come to the club and pick up your personal bracelet at the
                                reception.
                            </li>
                        </ol>
                        <p>
                            Access to the club premises is via QR in your personal account in the
                            DUCHESS FITNESS application.
                        </p>
                    </div>
                ),
            },
            {
                question: "What is included in the monthly subscription?",
                answer: (
                    <div className="space-y-7">
                        <p>The monthly subscription on the "All Inclusive" system includes:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Unlimited access to the gym;</li>
                            <li>Unlimited access to group programs;</li>
                            <li>
                                DUCHESS INTRO - an adaptation and equipment familiarization program
                                in small groups in the gym;
                            </li>
                            <li>Unlimited access to the SPA complex;</li>
                            <li>Unlimited access to all DUCHESS FITNESS network clubs.</li>
                        </ul>
                    </div>
                ),
            },
            {
                question: "Why pay an initiation fee?",
                answer: (
                    <div className="space-y-7">
                        <p>
                            The initiation fee is mandatory and is paid once if the membership is
                            not interrupted.
                        </p>
                        <p>It includes:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                A bracelet for using services within the club (locker in the
                                changing rooms, safe boxes, locker rental, training equipment,
                                vending bracelets);
                            </li>
                            <li>First free personal training session with a trainer;</li>
                            <li>Fitness testing;</li>
                            <li>Unlimited body composition analysis using the InBody machine;</li>
                            <li>
                                Services for registration, creating a personal account in the
                                application for club access and managing your subscription.
                            </li>
                        </ul>
                    </div>
                ),
            },
        ],
    },
    {
        locale: "ru",
        faqs: [
            {
                question: "Как оформить абонемент?",
                answer: (
                    <div className="space-y-7">
                        <p>
                            Вы можете оформить абонемент на сайте на странице или в мобильном
                            приложении. В случае возникновения вопросов обратиться к сотрудникам
                            ресепшен.
                        </p>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>
                                Заполните номер телефон, выберите клуб для тренировок, дату начала
                                тренировок.
                            </li>
                            <li>Заполните все необходимые персональные данные.</li>
                            <li>
                                Оплатите абонемент банковской картой: первая оплата состоит из
                                вступительного платежа и стоимости ежемесячного абонемента. Со 2-го
                                месяца вы оплачиваете только стоимость абонемента.
                            </li>
                            <li>Приходите в клуб и забирайте ваш личный браслет на ресепшене.</li>
                        </ol>
                        <p>
                            Вход на территорию клуба осуществляется с помощью QR в вашем личном
                            кабинете приложения DUCHESS FITNESS.
                        </p>
                    </div>
                ),
            },
            {
                question: "Что входит в ежемесячный абонемент?",
                answer: (
                    <div className="space-y-7">
                        <p>В ежемесячный абонемент по системе «Все включено» входит:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Безлимитное посещение тренажерного зала;</li>
                            <li>Безлимитное посещение групповых программ;</li>
                            <li>
                                DUCHESS INTRO - программа адаптации и знакомства с оборудованием в
                                мини-группах в тренажерном зале;
                            </li>
                            <li>Неограниченное посещение SPA-комплекса;</li>
                            <li>Безлимитный доступ во все клубы сети DUCHESS FITNESS.</li>
                        </ul>
                    </div>
                ),
            },
            {
                question: "Зачем платить вступительный взнос?",
                answer: (
                    <div className="space-y-7">
                        <p>
                            Вступительный взнос является обязательным и оплачивается один раз, если
                            членство не прерывается.
                        </p>
                        <p>В него входит:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                Браслет для пользования услуг внутри клуба (шкаф в раздевалках,
                                сейфовые ячейки, аренда шкафа, тренажеры, вендинговые браслеты);
                            </li>
                            <li>Первая бесплатная персональная тренировка с тренером;</li>
                            <li>Фитнес-тестирование;</li>
                            <li>
                                Неограниченное проведение анализа состава тела на аппарате InBody;
                            </li>
                            <li>
                                Услуги оформления, создание личного кабинета в приложении для
                                прохода в клуб и управления своей подпиской.
                            </li>
                        </ul>
                    </div>
                ),
            },
        ],
    },
];

export default function useFaqTranslation() {
    const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
