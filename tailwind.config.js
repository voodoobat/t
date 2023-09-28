/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.vue'],
    theme: {
        extend: {
            fontFamily: {
                base: ['Open Sans', 'sans-serif'],
                accent: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
