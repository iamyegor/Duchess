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
            <div className="absolute bottom-0 left-0 top-0 flex items-center justify-center">
                <span className="pl-5 font-bold text-paper/70">+44</span>
            </div>
            <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(formatPhoneNumber(e.target.value))}
                placeholder="20 7946 0958"
                className={classNames(inputClasses, "!px-[60px]")}
                required
            />
        </div>
    );
}
