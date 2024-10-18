/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	plugins: [],

	theme: {
		extend: {
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				fadeInUp: {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				slideIn: {
					"0%": { opacity: "0", transform: "translateX(-20px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				scaleIn: {
					"0%": { transform: "scale(0.5)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" },
				},
			},
			animation: {
				fadeIn: "fadeIn 1s ease-in-out",
				fadeInUp: "fadeInUp 1s ease-in-out",
				slideIn: "slideIn 1s ease-in-out",
				scaleIn: "scaleIn 1s ease-in-out",
			},
		},
	},
	plugins: [],
};
