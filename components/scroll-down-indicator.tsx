import { MdExpandMore } from 'react-icons/md';

export default function ScrollDownIndicator(props: { className?: string }) {
	return (
		<div
			className={`${props.className} animate-bounce rounded-full bg-container-alt`}
		>
			<a href={'#description'}>
				<MdExpandMore className={'size-12'} />
			</a>
		</div>
	);
}
