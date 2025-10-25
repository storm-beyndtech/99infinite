/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: { 
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				'gsp-navy': '#164e63',
				'gsp-teal': '#14b8a6',
				'gsp-orange': '#ea580c',
			},
		} 
	},
	plugins: [],
};
