import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
  	screens: {
  		xsm: '360px',
  		xs: '476px',
  		sm: '640px',
  		md: '768px',
  		bs: '900px',
  		lg: '1024px',
  		xl: '1280px',
  		'2xl': '1550px',
  		'2xl-mx': {
  			max: '1535px'
  		},
  		'xl-mx': {
  			max: '1279px'
  		},
  		'lg-mx': {
  			max: '1023px'
  		},
  		'bs-mx': {
  			max: '899px'
  		},
  		'md-mx': {
  			max: '767px'
  		},
  		'sm-mx': {
  			max: '639px'
  		},
  		'xs-mx': {
  			max: '475px'
  		},
  		'xsm-mx': {
  			max: '349px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			kanit: [
  				'var(--font-kanit)'
  			]
  		},
  		colors: {
  			primary: '#1E8DFF',
  			'light-primary-txt': '#030e35',
  			'light-secondary-txt': '#6f7d95',
  			'dark-primary-txt': '#ebf0ff',
  			'dark-secondary-txt': '#829aa6',
  			'dark-primary-bg': '#001321',
  			'dark-secondary-bg': '#011E30',
  			'light-primary-bg': '#F1F5FB',
  			'light-secondary-bg': '#fafdff'
  		},
  		backgroundImage: {
  			'primary-btn-bg': 'linear-gradient(315deg, rgb(115, 74, 232) 0%, rgb(0, 211, 197) 75%)',
  			'primary-btn-bg-hover': 'linear-gradient(150deg, rgb(115, 74, 232) 0%, rgb(0, 211, 197) 74%)'
  		},
  		boxShadow: {
  			'card-shadow-dark': 'rgb(21, 22, 47) 0px 1px 0px 1px, rgb(21, 22, 47) 0px 1px 0px 1px',
  			'card-shadow-light': 'rgba(17, 17, 26, 0.05) 0px 1px 0px 1px, rgba(17, 17, 26, 0.1) 0px 1px 0px 1px',
  			'box-shadow': 'rgba(17, 17, 26, 0.05) 0px 0px 16px 3px, rgba(17, 17, 26, 0.1) 0px 0px 16px 3px',
  			'box-shadow-dark': '#011E30 0px 0px 16px 3px, #011E30 0px 0px 16px 3px'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  // plugins: [require("tailwindcss-animate")],
} satisfies Config;
