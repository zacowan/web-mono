// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['JetBrains Mono', ...defaultTheme.fontFamily.sans]
			},
			height: {
				'icon-sm': '1.5rem',
				'icon-md': '2.0rem',
				'icon-lg': '2.5rem'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: ['lofi', 'black'],
		darkTheme: 'black',
		logs: false
	}
};
