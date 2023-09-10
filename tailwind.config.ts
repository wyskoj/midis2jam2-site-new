import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			dropShadow: {
				'thick-text-shadow': '0 0 2px rgb(0.1,0.1,0.4)',
			},
			colors: {
				'primary-surface': '#EFF6EB',
				'primary-surface-hover': '#D5E7D4',
				'on-primary-surface': '#006E1C',
				'container': '#1A1C19',
			},
		},
	},
	plugins: [],
};
export default config;
