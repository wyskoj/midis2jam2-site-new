import { IconType } from 'react-icons';

export default function Badge(props: {
	text: string;
	icon: IconType;
	color: string;
}) {
	return (
		<span className={`${props.color} px-4 py-1 inline-block rounded-full mb-1`}>
			{props.icon({ className: 'inline-block mr-1' })}
			{props.text}
		</span>
	);
}
