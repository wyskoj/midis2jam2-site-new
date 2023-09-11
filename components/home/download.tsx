import Link from '@/components/blue-link';
import OsTargetButton from '@/components/os-target-button';
import { sora } from '@/pages/_app';
import { SiApple, SiLinux, SiWindows11 } from 'react-icons/si';
import ReactMarkdown from 'react-markdown';

export default function Download() {
	const markdown = `
* Add new instrument: Kalimba
* Add a new user interface
* Add special textures for Synth Basses
* Add a keyboard control to reset the camera position (#165)
* Add new setting: smooth camera motion (#107)
* Add new camera control: slide camera (#107)
* Fix the issue where an exception is thrown if the first tempo event in a MIDI file does not occur at time zero. (#160)
* Fix the issue where the bow on bowed instruments did not lift when not playing. (#156)
* Fix the issue where some text events were displayed in lyrics
* Improve Trombone position and animation (#154)
* Improve Space Laser polyphony
* Improve Guitar stacking
`;

	return (
		<div className={'container space-y-4 py-8 text-center text-white'}>
			<div>
				<h2 className={`text-3xl font-extrabold uppercase ${sora.className}`}>
					Download
				</h2>
				<p className={'text-xs'}>v1.8.0 &ndash; 09/09/2023</p>
			</div>
			<div className={'flex w-full justify-center space-x-4'}>
				<OsTargetButton icon={SiWindows11} name={'Windows'} />
				<OsTargetButton icon={SiApple} name={'macOS'} />
				<OsTargetButton icon={SiLinux} name={'Linux'} />
			</div>
			<p>
				<Link href={'#'} text={'Other platforms, versions, and source'} />
			</p>
			<h2 className={`text-3xl font-extrabold uppercase ${sora.className}`}>
				Changelog
			</h2>
			<ReactMarkdown
				className={
					'm-auto max-w-[48rem] rounded-xl bg-container-1 p-6 text-justify'
				}
			>
				{markdown}
			</ReactMarkdown>
			<p className={'text-xs'}>
				Profiled and packaged with{' '}
				<Link
					href={
						'https://www.ej-technologies.com/products/jprofiler/overview.html'
					}
					text={'JProfiler'}
				/>{' '}
				and{' '}
				<Link
					href={
						'https://www.ej-technologies.com/products/install4j/overview.html'
					}
					text={'install4j'}
				/>
				, a Java profiler and multi-platform installer builder.
			</p>
		</div>
	);
}
