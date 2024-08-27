/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                default: "#F95700",
                "default-l": "#fb923c",
            },
            screens: {
                sm: "620px",
                xs: "430px",
            },
            fontSize: {
                "4.5xl": [
                    "2.55rem",
                    {
                        lineHeight: "1",
                    },
                ],
            },
        },
    },
    plugins: [],
};
