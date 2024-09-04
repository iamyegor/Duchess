import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sofa: ["Sofa", defaultTheme.fontFamily.sans],
            },
            colors: {
                default: "#F95700",
                "default-light": "#ff6614",
                "default-lighter": "#ff842b",
                "default-dark": "#e24f00",
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
                "5.5xl": [
                    "3.40rem",
                    {
                        lineHeight: "1",
                    },
                ],
            },
        },
        container: {
            center: true,
            padding: "20px",
            screens: {
                sm: "1240px",
                md: "1240px",
                lg: "1240px",
                xl: "1240px",
                "2xl": "1700px",
            },
        },
    },
    plugins: [],
};
