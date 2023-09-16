import NextLink from 'next/link';
import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';

/**
 * The parameters for the Link component.
 */
type LinkParams = {
	href: string;
	text: string;
};

/**
 * A blue link with an external link icon.
 */
export default function Link(props: LinkParams) {
	return (
		<NextLink
			href={props.href}
			className={'text-blue-400 hover:underline'}
			target={props.href.startsWith('http') ? '_blank' : undefined}
		>
			{props.text}
			{props.href.startsWith('http') ? (
				<>
					&nbsp;
					<BiLinkExternal className={'inline '} />
				</>
			) : null}
		</NextLink>
	);
}
