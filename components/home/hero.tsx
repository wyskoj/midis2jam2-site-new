import HeroVideo from '@/components/hero-video';
import MdButton from '@/components/md-button';
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
						'absolute top-4 flex w-full flex-col content-between items-center justify-between space-y-2 px-32 text-white sm:flex-row'
					}
				>
					<a>Home</a>
					<a>Builds</a>
					<WideLogo className={'h-24 w-auto'} />
					<a>Source</a>
					<a>Discord</a>
				</div>
				<HeroVideo />
				<div className={'px-4 drop-shadow-thick-text-shadow'}>
					<h2 className={`text-6xl font-black ${sora.className}`}>
						Your favorite songs—animated.
					</h2>
					<p className={'text-2xl font-bold'}>
						A remaster of MIDIJam, a 3D MIDI file visualizer.
					</p>
				</div>
				<MdButton>
					<MdDownload className={'mr-2 inline'} />
					Download
				</MdButton>
			</div>
		</div>
	);
}
