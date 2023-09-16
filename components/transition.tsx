import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';

const variants: Variants = {
	out: {
		opacity: 0,
	},
	in: {
		opacity: 1,
	},
};

export function Transition(props: { children: React.JSX.Element }) {
	const { asPath } = useRouter();

	return (
		<div>
			<AnimatePresence mode="wait">
				<motion.div
					key={asPath}
					variants={variants}
					animate="in"
					initial="out"
					exit="out"
				>
					{props.children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
