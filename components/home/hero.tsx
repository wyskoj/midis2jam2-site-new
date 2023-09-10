import MdButton from '@/components/md-button';
import PromoVideo from '@/components/promo-video';
import WideLogo from '@/components/wide-logo';
import { sora } from '@/pages/_app';
import { MdDownload } from 'react-icons/md';

export default function Hero() {
	return (
		<div className={'static block'}>
			<div
				className={
					'flex h-screen w-full flex-col items-center justify-center overflow-hidden text-center text-white'
				}
			>
				<div
					className={
						'absolute top-2 flex w-full flex-col content-between items-center justify-between px-8 text-white sm:flex-row'
					}
				>
					<a>Home</a>
					<a>Builds</a>
					<WideLogo className={'h-12 w-auto'} />
					<a>Source</a>
					<a>Discord</a>
				</div>
				<PromoVideo />
				<h2
					className={`text-4xl font-black drop-shadow-thick-text-shadow ${sora.className}`}
				>
					Your favorite songs—animated.
				</h2>
				<p className={'font-bold drop-shadow-thick-text-shadow'}>
					A remaster of MIDIJam, a 3D MIDI file visualizer.
				</p>
				<MdButton>
					<MdDownload className={'mr-2 inline'} />
					Download
				</MdButton>
			</div>
		</div>
	);
}
