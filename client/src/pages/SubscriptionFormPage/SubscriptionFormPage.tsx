import DuchessLogo from "@/components/ui/DuchessLogo.tsx";
import Checkbox from "@/components/ui/Checkbox.tsx";
import React, { useState } from "react";
import SelectComponent from "@/pages/HomePage/components/SelectComponent.tsx";
import PhoneNumberInput from "@/pages/SubscriptionFormPage/components/PhoneNumberInput.tsx";
import { locations } from "@/data/locations.ts";
import useSelectedCityAndGym from "@/pages/SubscriptionFormPage/hooks/useSelectedCityAndGym.ts";

export default function SubscriptionFormPage() {
    const { selectedCity, selectedGym, changeCity, changeGym } = useSelectedCityAndGym();

    const [isPrivacyPolicyChecked, setIsPrivacyPolicyChecked] = useState(false);
    const [isSpamChecked, setIsSpamChecked] = useState(false);

    const inputClasses =
        "w-full px-8 py-3.5 text-gray-200 bg-neutral-800 border border-neutral-500 border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-default placeholder:text-neutral-400";

    function getGymsForCity() {
        return locations.find((x) => x.name === selectedCity)?.markers.map((x) => x.name) ?? [];
    }

    return (
        <div className="flex flex-col bg-default h-full">
            <DuchessLogo />
            <div className="container h-full pb-14 pt-8 min-h-[700px]">
                <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center md:text-left">
                    ОФОРМИТЬ АБОНЕМЕНТ
                </h2>
                <div className="h-full flex items-center justify-center">
                    <form className="space-y-7 bg-neutral-800/30 border border-neutral-500/40 max-w-xl p-6 sm:p-10 rounded-xl">
                        <SelectComponent
                            currentValue={selectedCity}
                            values={locations.map((x) => x.name)}
                            onChange={(e) => changeCity(e.target.value as string)}
                        />
                        <SelectComponent
                            currentValue={selectedGym}
                            values={getGymsForCity()}
                            onChange={(e) => changeGym(e.target.value as string)}
                            defaultValue="Выберите зал"
                        />

                        <input type="text" placeholder="Имя*" className={inputClasses} required />
                        <PhoneNumberInput inputClasses={inputClasses} />
                        <input
                            type="email"
                            placeholder="E-mail*"
                            className={inputClasses}
                            required
                        />
                        <div className="flex items-center space-x-3">
                            <Checkbox
                                id="privacyPolicy"
                                isChecked={isPrivacyPolicyChecked}
                                onClick={() => setIsPrivacyPolicyChecked((prev) => !prev)}
                            />
                            <label htmlFor="privacyPolicy" className="text-gray-200">
                                Согласие с политикой конфиденциальности
                            </label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Checkbox
                                id="spam"
                                isChecked={isSpamChecked}
                                onClick={() => setIsSpamChecked((prev) => !prev)}
                            />
                            <label htmlFor="spam" className="text-gray-200">
                                Получать уведомления о новых акциях и скидках
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-default text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
                        >
                            Записаться
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
