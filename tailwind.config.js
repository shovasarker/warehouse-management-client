module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        logo: ['Great Vibes', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'slide-top': {
          '0%': { transform: 'translateY(-500%)' },
          '50%': { transform: 'translateY(-250%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-top':
          'slide-top 2s cubic-bezier(0.37, 0.28, 0.74, 1.29) forwards',
      },
    },
  },
  plugins: [],
}
