import React, { useState } from "react";
import { TbHandStop } from "react-icons/tb";
import Checkbox from "@/components/ui/Checkbox.tsx";
import CustomDialog from "@/components/ui/CustomDialog/CustomDialog.tsx";
import DuchessLogo from "@/components/ui/DuchessLogo.tsx";
import useLocations from "@/data/locations";
import SelectComponent from "@/pages/HomePage/components/SelectComponent.tsx";
import PhoneNumberInput from "@/pages/SubscriptionFormPage/components/PhoneNumberInput.tsx";
import useSubscriptionFormData from "@/pages/SubscriptionFormPage/hooks/useSubscriptionFormData.ts";
import useSubscriptionFormTranslation from "./hooks/useSubscriptionFormTranslation";

export default function SubscriptionFormPage() {
    const t = useSubscriptionFormTranslation();
    const {
        selectedCity,
        selectedGym,
        selectedSubscription,
        changeCity,
        changeGym,
        setSelectedSubscription,
    } = useSubscriptionFormData({
        gymPlaceholder: t.gymPlaceholder,
        subscriptionPlaceholder: t.subscriptionPlaceholder,
    });
    const locations = useLocations();

    const [subscribeFailedDialogOpen, setSubscribeFailedDialogOpen] = useState(false);
    const [isPrivacyPolicyChecked, setIsPrivacyPolicyChecked] = useState(false);
    const [isSpamChecked, setIsSpamChecked] = useState(false);

    const inputClasses = "du-field";

    function getGymsForCity() {
        return locations.find((x) => x.name === selectedCity)?.markers.map((x) => x.name) ?? [];
    }

    function subscribe(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubscribeFailedDialogOpen(true);
    }

    return (
        <div className="du-page flex h-full flex-col">
            <DuchessLogo />
            <div className="container h-full min-h-[700px] space-y-8 pb-20 pt-4 lg:pt-24">
                <div>
                    <span className="du-kicker">join request</span>
                    <h2 className="du-display text-center text-6xl text-paper xs:text-7xl sm:text-8xl lg:text-left">
                        {t.title}
                    </h2>
                </div>
                <div className="h-full flex items-center justify-center">
                    <form
                        onSubmit={subscribe}
                        className="du-panel grid w-full max-w-2xl gap-5 rounded-sm p-4 py-6 xs:p-6 sm:p-10"
                    >
                        <SelectComponent
                            currentValue={selectedCity}
                            values={locations.map((x) => x.name)}
                            onChange={(e) => changeCity(e.target.value as string)}
                            defaultValue={t.cityPlaceholder}
                        />
                        <SelectComponent
                            currentValue={selectedGym}
                            values={getGymsForCity()}
                            onChange={(e) => changeGym(e.target.value as string)}
                            defaultValue={t.gymPlaceholder}
                        />
                        <SelectComponent
                            currentValue={selectedSubscription}
                            defaultValue={t.subscriptionPlaceholder}
                            values={Object.values(t.subscriptions)}
                            onChange={(e) => setSelectedSubscription(e.target.value as string)}
                        />
                        <input
                            type="text"
                            placeholder={t.namePlaceholder}
                            className={inputClasses}
                            required
                        />
                        <PhoneNumberInput inputClasses={inputClasses} />
                        <input
                            type="email"
                            placeholder={t.emailPlaceholder}
                            className={inputClasses}
                            required
                        />
                        <div className="flex items-center gap-3">
                            <Checkbox
                                id="privacyPolicy"
                                isChecked={isPrivacyPolicyChecked}
                                onClick={() => setIsPrivacyPolicyChecked((prev) => !prev)}
                            />
                            <label htmlFor="privacyPolicy" className="text-sm leading-6 text-paper/70">
                                {t.privacyPolicy}
                            </label>
                        </div>
                        <div className="flex items-center gap-3">
                            <Checkbox
                                id="spam"
                                isChecked={isSpamChecked}
                                onClick={() => setIsSpamChecked((prev) => !prev)}
                            />
                            <label htmlFor="spam" className="text-sm leading-6 text-paper/70">
                                {t.spam}
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="du-button w-full py-4 text-sm tracking-[0.14em]"
                        >
                            {t.submitButton}
                        </button>

                        <CustomDialog
                            isOpen={subscribeFailedDialogOpen}
                            onClose={() => setSubscribeFailedDialogOpen(false)}
                        >
                            <div className="px-6 flex flex-col items-center space-y-4">
                                <TbHandStop className="w-20 h-20 text-default" />
                                <p className="text-xl font-medium text-center">
                                    {t.subscriptionUnavailable}
                                </p>
                            </div>
                        </CustomDialog>
                    </form>
                </div>
            </div>
        </div>
    );
}
