/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                default: "#F95700",
            },
            screens: {
                sm: "620px",
                xs: "430px",
            },
        },
    },
    plugins: [],
};
