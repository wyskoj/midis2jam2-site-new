import HeroVideo from '@/components/hero-video';
import MdButton from '@/components/md-button';
import Nav from '@/components/nav';
import ScrollDownIndicator from '@/components/scroll-down-indicator';
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
				<Nav onIndexPage={true} />
				<HeroVideo />
				<div className={'px-4 drop-shadow-thick-text-shadow'}>
					<h2 className={`text-4xl md:text-6xl font-black ${sora.className}`}>
						Your favorite songs—animated.
					</h2>
					<p className={'text-xl md:text-2xl font-bold'}>
						A remaster of MIDIJam, a 3D MIDI file visualizer.
					</p>
				</div>
				<MdButton>
					<a href={'#download'}>
						<div className={'text-xl'}>
							<MdDownload className={'mr-2 inline'} />
							Download
						</div>
					</a>
				</MdButton>
				<ScrollDownIndicator className={'absolute bottom-4'} />
			</div>
		</div>
	);
}
