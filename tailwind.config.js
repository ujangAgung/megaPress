const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        container: {
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1080px",
            },
        },
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                hero: "url('/img/bg.jpg')",
            },
            colors: {
                "orange-logo": "#ff7a3d",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
