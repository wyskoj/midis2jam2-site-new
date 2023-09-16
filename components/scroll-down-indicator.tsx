import { MdExpandMore } from 'react-icons/md';

export default function ScrollDownIndicator(props: { className?: string }) {
	return (
		<div
			className={`${props.className} animate-bounce rounded-full bg-container-alt`}
		>
			<a href={'#description'}>
				<MdExpandMore className={'h-12 w-12'} />
			</a>
		</div>
	);
}
