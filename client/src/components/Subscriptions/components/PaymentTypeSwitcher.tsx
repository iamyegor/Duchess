import classNames from "classnames";
import PaymentType from "@/pages/HomePage/types/PaymentType.ts";

interface PaymentTypeSwitcherProps {
    selectedType: PaymentType;
    setSelectedPaymentType: (paymentType: PaymentType) => void;
    paymentType: PaymentType;
}

export default function PaymentTypeSwitcher({
    selectedType,
    setSelectedPaymentType,
    paymentType,
}: PaymentTypeSwitcherProps) {
    return (
        <button
            className={classNames("flex-1 rounded-xl p-3 text-center transition text-nowrap text-sm xs:text-base xs:px-10", {
                "bg-default hover:bg-default-light border border-default-lighter":
                    selectedType === paymentType,
                "hover:bg-neutral-900": selectedType !== paymentType,
            })}
            onClick={() => setSelectedPaymentType(paymentType)}
        >
            Оплата {paymentType}
        </button>
    );
}
