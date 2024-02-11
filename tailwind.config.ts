import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
	darkMode: "class", // Use class-based dark mode.
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#e5e7eb",
				secondary: "#FFCAD4",
				"accent-1": "#005F73",
				"accent-2": "#EF476F",
				"text-primary": "#1A1A1A",
				"text-secondary": "#404040",
				background: "#F7F7F7",
				"background-secondary": "#E1E1E1",
				"primary-dark": "#7C5AC2",
				"secondary-dark": "#434857",
				"accent-1-dark": "#FF8C00",
				"accent-2-dark": "#00D1B2",
				"text-primary-dark": "#EDEDED",
				"text-secondary-dark": "#B3B3B3",
				"background-dark": "#1A1A2E",
				"background-secondary-dark": "#262A34",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [
		plugin(function ({ addBase }) {
			addBase({
				"*": { boxSizing: "border-box" },
				"*, *::before, *::after": { padding: "0", margin: "0" },
			});
		}),
	],
};
export default config;
