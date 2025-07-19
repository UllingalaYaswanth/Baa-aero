module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 2s infinite',
        droneFly: 'droneFly 15s infinite linear',
        gradientBG: 'gradientBG 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        droneFly: {
          '0%': { transform: 'translateX(-100px) translateY(0px)' },
          '50%': { transform: 'translateX(100px) translateY(-30px)' },
          '100%': { transform: 'translateX(-100px) translateY(0px)' },
        },
        gradientBG: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}