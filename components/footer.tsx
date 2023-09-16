import Link from '@/components/blue-link';
import WideLogo from '@/components/wide-logo';

export default function Footer() {
	return (
		<footer className="bg-container text-gray-400 ">
			<div
				className={
					'flex flex-col md:flex-row-reverse space-y-8 items-center container px-4 py-8'
				}
			>
				<div className={'text-sm text-center md:w-1/2'}>
					<WideLogo className={'w-full m-auto'} />
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
				<div className={'text-xs text-center md:text-left  md:w-1/2'}>
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
