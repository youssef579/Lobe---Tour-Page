/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                primary: "#04ddb2",
                gray: "#333333",
                "light-gray": "#767676",
            },
            screens: {
                md: "800px",
            },
            transitionDuration: {
                DEFAULT: "300ms",
            },
        },
    },
    plugins: [],
};
