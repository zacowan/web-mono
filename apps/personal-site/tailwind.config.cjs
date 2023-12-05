/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			height: {
				'icon-sm': '1.5rem',
				'icon-md': '2.0rem',
				'icon-lg': '2.5rem'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: ['nord'],
		logs: false
	}
};
