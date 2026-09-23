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
            className={classNames("flex-1 rounded-sm p-3 text-center text-sm font-extrabold uppercase tracking-[0.12em] text-nowrap xs:px-10 xs:text-base", {
                "bg-default text-ink shadow-[0_12px_30px_rgba(255,119,0,0.25)]":
                    selectedType === paymentType,
                "text-paper/65 hover:bg-paper/10 hover:text-paper": selectedType !== paymentType,
            })}
            onClick={() => setSelectedPaymentType(paymentType)}
        >
            {paymentType}
        </button>
    );
}
