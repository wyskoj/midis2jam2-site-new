import MdButton from '@/components/md-button';
import { IconType } from 'react-icons';

export default function OsTargetButton(props: {
	icon: IconType;
	name: string;
}) {
	return (
		<MdButton rounded={'rounded-xl'}>
			<div
				className={
					'flex h-24 flex-col items-center justify-center space-y-2 w-20'
				}
			>
				<props.icon size={48} />
				<div>{props.name}</div>
			</div>
		</MdButton>
	);
}
