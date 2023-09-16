import Link from '@/components/blue-link';
import WideLogo from '@/components/wide-logo';

export default function Footer() {
	return (
		<footer className="bg-container text-gray-400 ">
			<div
				className={
					'container flex flex-col items-center space-y-8 px-4 py-8 md:flex-row-reverse'
				}
			>
				<div className={'text-center text-sm md:w-1/2'}>
					<WideLogo className={'m-auto w-full'} />
					<p className={'font-medium'}>
						A remaster of MIDIJam, a 3D MIDI file visualizer.
					</p>
					<p className={'mt-2'}>
						<Link href={'/'} text={'Home'} /> &bull;{' '}
						<Link href={'/builds'} text={'Builds'} /> &bull;{' '}
						<Link
							href={'https://github.com/wyskoj/midis2jam2'}
							text={'Source'}
						/>{' '}
						&bull;{' '}
						<Link href={'https://discord.gg/HD6KFQ2zkW'} text={'Discord'} />
					</p>
				</div>
				<div className={'text-center text-xs md:w-1/2  md:text-left'}>
					<p>
						Site &copy; MMXXI–MMXXIII{' '}
						<Link href={'https://wysko.org'} text={'Jacob Wysko'} />. All Rights
						Reserved.
					</p>
					<p>
						midis2jam2 &copy; MMXXI–MMXXIII Jacob Wysko. Released under the{' '}
						<Link
							href={'https://www.gnu.org/licenses/gpl.html'}
							text={'GNU General Public License 3'}
						/>
						, the software comes with absolutely no warranty. Some assets
						Copyright © 2007{' '}
						<Link href={'http://www.gamesbyscott.com/'} text={'Scott Haag'} />{' '}
						(used with permission). View the About screen in the app for
						complete contribution attributions.
					</p>
					<p>SoundFont is a registered trademark of E-mu Systems, Inc.</p>
					<p>
						Device mockups powered by{' '}
						<Link href={'https://deviceframes.com'} text={'DeviceFrames'} />.
					</p>
				</div>
			</div>
		</footer>
	);
}
