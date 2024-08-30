import DuchessLogo from "@/components/ui/DuchessLogo.tsx";
import AccordionItem from "@/pages/FaqPage/components/AccordionItem.tsx";

export default function FaqPage() {
    const faqData = [
        {
            question: "What is your return policy?",
            answer: "Our return policy is 30 days, no questions asked.",
        },
        {
            question: "How do I track my order?",
            answer: "You can track your order using the tracking link sent to your email.",
        },
    ];

    return (
        <div className="my-6 container">
            <DuchessLogo />
            <div className="space-y-7">
                <AccordionItem question="Как оформить абонемент?">
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
                </AccordionItem>
                <AccordionItem question="Что входит в ежемесячный абонемент?">
                    <div className="space-y-7">
                        <p>В ежемесячный абонемент по системе «Все включено» входит:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Безлимитное посещение тренажерного зала;</li>
                            <li>Безлимитное посещение групповых программ;</li>
                            <li>
                                DUCHESS INTRO - программа адаптации и знакомства с оборудованием в
                                мини-группах в тренажерном зале;
                            </li>
                            <li>Неограниченное посещение SPA-комплекса</li>
                            <li>Безлимитный доступ во все клубы сети DUCHESS FITNESS</li>
                        </ul>
                    </div>
                </AccordionItem>
                <AccordionItem question="Зачем платить вступительный взнос?">
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
                </AccordionItem>
            </div>
        </div>
    );
}
