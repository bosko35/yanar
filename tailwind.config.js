/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#202020", // Koyu Antrasit / Siyah
                secondary: "#ecca52", // Altın / Bronz
                accent: "#8B0000", // Koyu Kırmızı / Bordo (Acil durumlar için)
                light: "#FFFFFF",
                gray: {
                    100: "#f3f4f6",
                    200: "#e5e7eb",
                    800: "#1f2937",
                    900: "#111827",
                },
                gold: {
                    light: "#F9F1E7", // Very light gold/cream for text on dark backgrounds
                    DEFAULT: "#B08D74", // The standard brand gold
                    dark: "#7A6251", // Darker gold for body text on white backgrounds
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Montserrat"', 'sans-serif'],
                script: ['"Great Vibes"', 'cursive'],
            },
            backgroundImage: {
                'hero-pattern': "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')",
            }
        },
    },
    plugins: [],
}