import React from 'react';

type TailwindBorderRadius = `rounded-${string}`;

export default function MdButton(props: {
	rounded?: TailwindBorderRadius;
	children?: React.ReactNode;
}) {
	return (
		<button
			className={
				`mt-2 ${
					props.rounded ? props.rounded : 'rounded-full'
				} bg-primary-surface px-6 py-1.5 text-sm shadow-md ` +
				'text-on-primary-surface transition duration-100 ease-linear hover:bg-primary-surface-hover flex items-center'
			}
		>
			{props.children}
		</button>
	);
}
