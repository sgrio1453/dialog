/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      audiowide: ['Audiowide', 'sans-serif'],
      comfortaa: ['Comfortaa', 'sans-serif'],
      redHatDisplay : ['Red Hat Display', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "d-blue" : "#008B8B",
        "d-blue2": "#6ED7C9",
        "d-gta" : "#9376A2",    
        "d-gta2" : "#F8A18E",
        "d-purple" : "#FF8080",
        "d-green" : "#50817B",
        "d-green2" : "#09805D",
        "d-yellow": "#B6C79D",
        "d-gray" : "#202C33",
        "d-white" : "#C2CAD2",
        "d-black" : "#121B23",
        "d-gray2" : "#19222A",
        "d-gray3" : "#182127",
        "bg-white" : "#FDFDFD"
      }
    },
  },
  plugins: [],
}
