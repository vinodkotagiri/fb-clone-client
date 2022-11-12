/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-bg': '#fff',
				'secondary-bg': '#f0f2f5',
				'third-bg': '#e4e6eb',
				'forth-bg': '#f0f2f5',
				'primary-color': '#050505',
				'secondary-color': '#65676b',
				divider: '#ced0d4',
				'dark-bg-primary': '#18191a',
				'dark-bg-secondary': '#242526',
				'dark-bg-third': '#3a3b3c',
				'dark-bg-forth': '#3a3b3c',
				'dark-color-primary': '#242526',
				'dark-color-secondary': '#b0b3b8',
				'blue-color': '#1876f2',
				'green-color': '#42b72a',
				'light-blue-color': '#e7f3ff',
				'border-color': '#ccced2',
			},
		},
	},
	plugins: [],
}
