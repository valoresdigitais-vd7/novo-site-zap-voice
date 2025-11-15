/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#25D366', // verde WhatsApp principal
          light: '#DCF8C6',   // verde claro
          dark: '#128C7E',    // verde escuro
        },
        secondary: {
          DEFAULT: '#34B7F1', // azul WhatsApp
          light: '#75E1FF',   // azul claro
          dark: '#0B93C7',    // azul escuro
        },
        neutral: {
          100: '#ffffff', // fundo principal branco
          200: '#f1f5f9', // fundo de seções alternadas
          300: '#e2e8f0', // bordas suaves
          400: '#cbd5e1', // bordas
          500: '#94a3b8', // texto desabilitado
          600: '#64748b', // texto secundário
          700: '#475569', // texto
          800: '#334155', // texto escuro, fundo do footer
          900: '#1e293b', // texto muito escuro
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}