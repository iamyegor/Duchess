import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                display: ["Bebas Neue", defaultTheme.fontFamily.sans],
                body: ["Commissioner", defaultTheme.fontFamily.sans],
                sofa: ["Sofa", defaultTheme.fontFamily.sans],
            },
            colors: {
                default: "#FF7700",
                "default-light": "#FF9633",
                "default-lighter": "#FFB366",
                "default-dark": "#E66B00",
                ink: "#050505",
                paper: "#FFF7E8",
                acid: "#B8FF58",
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
                sm: "1150px",
                md: "1150px",
                lg: "1150px",
                xl: "1150px",
            },
        },
    },
    plugins: [],
};
