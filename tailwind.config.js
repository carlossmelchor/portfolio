/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				'judson': ['Judson', 'serif'],
				'roboto': ['Roboto', 'sans-serif'],
			},
			colors: {
				primary: {
				  DEFAULT: '#D7F9FF',
				  700: '#AFCBFF',
				},
				secondary: '#FFEDE1',
			  },
		},
		borderRadius: {
			'none': '0',
			'sm': '0.125rem',
			DEFAULT: '0.25rem',
			DEFAULT: '4px',
			'md': '0.375rem',
			'lg': '2rem',
			'full': '9999px',
			'large': '14px',
		  }
	},
	plugins: [],
};