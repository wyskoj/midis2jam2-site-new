import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
		},
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
				'primary-surface': '#005313',
				'primary-surface-hover': '#0A601C',
				'on-primary-surface': '#7AFE7E',
				'container': '#1A1C19',
				'container-alt': '#1e201d',
				'container-1': '#242623',
			},
		},
	},
	plugins: [],
};
export default config;
