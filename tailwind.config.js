module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          teal: "var(--primary-teal)",
          dark: "var(--primary-dark)",
          green: "var(--primary-green)",
          greenLight: "var(--primary-green-light)",
          blue: "var(--primary-blue)",
          mint: "var(--primary-mint)",
          yellow: "var(--primary-yellow)",
          yellowLight: "var(--primary-yellow-light)",
          coral: "var(--primary-coral)",
          coralLight: "var(--primary-coral-light)",
          white: "var(--primary-white)",
          whiteTransparent: "var(--primary-white-transparent)"
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          dark: "var(--text-dark)",
          muted: "var(--text-muted)",
          accentGreen: "var(--text-accent-green)",
          accentBlue: "var(--text-accent-blue)",
          accentYellow: "var(--text-accent-yellow)",
          accentCoral: "var(--text-accent-coral)",
          white: "var(--text-white)"
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        source: ['"Source Sans Pro"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: []
};