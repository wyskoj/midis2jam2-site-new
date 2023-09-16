import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name={'theme-color'} content={'#1A1C19'} />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
