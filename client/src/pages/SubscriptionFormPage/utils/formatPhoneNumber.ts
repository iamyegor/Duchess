const NOT_DIGITS = /\D/g;

export function formatPhoneNumber(phoneNumber: string): string {
    const digits: string = phoneNumber.replace(NOT_DIGITS, "");

    if (digits.length === 0) {
        return "";
    }

    return format10DigitPhoneNumber(digits);
}

function format10DigitPhoneNumber(digits: string): string {
    if (digits.length <= 2) {
        return digits;
    } else if (digits.length <= 6) {
        return `${digits.slice(0, 2)} ${digits.slice(2)}`;
    } else {
        return `${digits.slice(0, 2)} ${digits.slice(2, 6)} ${digits.slice(6, 10)}`;
    }
}
