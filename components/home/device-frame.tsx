import { sora } from '@/pages/_app';
import DeviceFrameImg from '@/public/deviceframe.png';
import Image from 'next/image';

export default function DeviceFrame() {
	return (
		<div className={'bg-container'}>
			<div className={'container'}>
				<div className={'flex flex-col gap-y-16 px-4 py-32 lg:flex-row'}>
					<div className={'flex justify-end lg:w-1/2'}>
						<Image
							src={DeviceFrameImg}
							alt={'midis2jam2 on a computer screen'}
							height={800}
							className={'w-auto'}
						/>
					</div>
					<div
						className={
							'flex flex-col justify-center space-y-8 text-white lg:w-1/2'
						}
					>
						<h2
							className={`text-3xl font-black md:text-5xl ${sora.className} text-center lg:text-left`}
						>
							MIDIJam for the modern computer.
						</h2>
						<p
							className={
								'text-center text-xl font-medium md:text-3xl md:leading-10 lg:text-left'
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
