import { MdExpandMore } from 'react-icons/md';

export default function ScrollDownIndicator(props: { className?: string }) {
	return (
		<div
			className={`${props.className} bg-container-alt rounded-full animate-bounce`}
		>
			<a href={'#description'}>
				<MdExpandMore className={'h-12 w-12'} />
			</a>
		</div>
	);
}
