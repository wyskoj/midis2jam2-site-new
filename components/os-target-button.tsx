import MdButton from '@/components/md-button';
import { IconType } from 'react-icons';

/**
 * Renders a button component with an icon, name, and a clickable URL.
 */
export default function OsTargetButton(props: {
	icon: IconType;
	name: string;
	url: string;
}) {
	return (
		<MdButton rounded={'rounded-xl w-full m-auto'}>
			<a
				href={props.url}
				className={
					'flex h-24 flex-col items-center justify-center space-y-2 grow m-auto'
				}
			>
				<props.icon size={48} />
				<p>{props.name}</p>
			</a>
		</MdButton>
	);
}
