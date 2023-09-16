import { Transition } from '@/components/transition';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { Inter, Sora } from 'next/font/google';
import Router from 'next/router';
import NProgress from 'nprogress';

export const inter = Inter({ subsets: ['latin'] });
export const sora = Sora({ subsets: ['latin'] });

NProgress.configure({
	minimum: 0.3,
	easing: 'ease',
	speed: 200,
	showSpinner: true,
	trickleSpeed: 1000,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={`${inter.className}`}>
			<AnimatePresence
				onExitComplete={() => {
					window.scrollTo(0, 0);
				}}
			>
				<Transition>
					<Component {...pageProps} />
				</Transition>
			</AnimatePresence>
		</div>
	);
}
