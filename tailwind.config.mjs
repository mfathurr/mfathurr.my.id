/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
	daisyui: {
		themes: [
			{
				lofi: {
					...require("daisyui/src/theming/themes")["lofi"],
					"--rounded-box": "1rem",
					"--rounded-btn": "0.5rem",
					"--rounded-badge": "1.9rem"
				},
				forest: {
					...require("daisyui/src/theming/themes")["forest"],
					"--rounded-box": "1rem",
					"--rounded-btn": "0.5rem",
					"--rounded-badge": "1.9rem",
				}
			}
		],
	},
	theme: {
		extend: {
			fontFamily: {
				'sans': ["DM Sans", "Inter", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
