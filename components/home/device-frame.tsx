import { sora } from '@/pages/_app';
import DeviceFrameImg from '@/public/deviceframe.png';
import Image from 'next/image';

export default function DeviceFrame() {
	return (
		<div className={'bg-container'}>
			<div className={'container'}>
				<div className={'flex flex-col lg:flex-row py-32 gap-y-16 px-4'}>
					<div className={'flex lg:w-1/2 justify-end'}>
						<Image
							src={DeviceFrameImg}
							alt={'midis2jam2 on a computer screen'}
							height={800}
							className={'w-auto'}
						/>
					</div>
					<div
						className={
							'lg:w-1/2 flex flex-col justify-center text-white space-y-8'
						}
					>
						<h2
							className={`font-black text-3xl md:text-5xl ${sora.className} text-center lg:text-left`}
						>
							MIDIJam for the modern computer.
						</h2>
						<p
							className={
								'text-xl md:text-3xl font-medium md:leading-10 text-center lg:text-left'
							}
						>
							Feature rich, easy to use, and free. midis2jam2 is the best way to
							play MIDI files on your computer.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
