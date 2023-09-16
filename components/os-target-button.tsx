import MdButton from '@/components/md-button';
import { IconType } from 'react-icons';

/**
 * Renders a button component with an icon, name, and a clickable URL.
 */
export default function OsTargetButton(props: {
	icon: IconType;
	name: string;
	url: string | undefined;
}) {
	return (
		<MdButton rounded={'rounded-xl w-full m-auto'}>
			<a
				href={props.url}
				className={
					'm-auto flex h-24 grow flex-col items-center justify-center space-y-2'
				}
			>
				<props.icon size={48} />
				<p>{props.name}</p>
			</a>
		</MdButton>
	);
}
