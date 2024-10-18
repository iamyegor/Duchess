import classNames from "classnames";

interface PaymentTypeSwitcherProps {
    selectedType: string;
    setSelectedPaymentType: (paymentType: string) => void;
    paymentType: string;
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
            {paymentType}
        </button>
    );
}
