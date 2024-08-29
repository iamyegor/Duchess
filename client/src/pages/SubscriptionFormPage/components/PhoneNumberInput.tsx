import classNames from "classnames";
import { useState } from "react";
import { formatPhoneNumber } from "@/pages/SubscriptionFormPage/utils/formatPhoneNumber.ts";

interface PhoneNumberInputProps {
    inputClasses: string;
}

export default function PhoneNumberInput({ inputClasses }: PhoneNumberInputProps) {
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    return (
        <div className="relative">
            <div className="flex justify-center items-center absolute top-0 bottom-0 left-0">
                <span className="pl-8">+7</span>
            </div>
            <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(formatPhoneNumber(e.target.value))}
                placeholder="(999) 999-9999"
                className={classNames(inputClasses, "!px-[60px]")}
                required
            />
        </div>
    );
}
