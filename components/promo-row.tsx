import { sora } from '@/pages/_app';
import Image, { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

export interface PromoRowProps {
	emoji: string;
	title: string;
	children: ReactElement | ReactElement[];
	image: StaticImageData;
	alt: string;
	reversed?: boolean;
}

export function PromoRow(props: PromoRowProps) {
	return (
		<div
			className={`container flex flex-col items-center gap-x-24 gap-y-4 p-4 text-white ${
				props.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
			}`}
		>
			<div className={'lg:w-1/2'}>
				<h2 className={`${sora.className} mb-4 text-4xl font-extrabold`}>
					{props.emoji}&nbsp;{props.title}
				</h2>
				<div className={'space-y-6 text-xl leading-8'}>{props.children}</div>
			</div>
			<div className={'lg:w-1/2'}>
				<Image src={props.image} alt={props.alt} className={'rounded-2xl'} />
			</div>
		</div>
	);
}
