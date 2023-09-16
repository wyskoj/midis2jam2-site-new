import Link from '@/components/blue-link';
import { PromoRow, PromoRowProps } from '@/components/promo-row';
import Screenshot1 from '@/public/screenshot1.jpg';
import Screenshot2 from '@/public/screenshot2.jpg';
import Screenshot3 from '@/public/screenshot3.jpg';
import Screenshot4 from '@/public/screenshot4.jpg';
import Screenshot5 from '@/public/screenshot5.jpg';

const promoRows: PromoRowProps[] = [
	{
		emoji: '🎶',
		title: 'Your favorite songs—animated.',
		image: Screenshot1,
		alt: 'Screenshot of midis2jam2',
		reversed: false,
		children: (
			<>
				<p>
					midis2jam2 is a 3D MIDI file visualizer. It plays any MIDI file and
					animates its performance with a virtual band.
				</p>
				<p>
					A remaster of MIDIJam, it provides a faithful recreation of the
					original MIDI file visualizer with new instruments, graphics, and
					settings.
				</p>
			</>
		),
	},
	{
		emoji: '🎥',
		title: 'View from anywhere.',
		image: Screenshot3,
		alt: 'Screenshot of midis2jam2',
		reversed: false,
		children: (
			<>
				<p>
					midis2jam2 natively supports a freecam/noclip feature, allowing you to
					move around the scene and view from any angle.
				</p>
				<p>
					Get up close to any instrument and notice the detail. Each instrument
					is accurately and aesthetically animated.
				</p>
			</>
		),
	},
	{
		emoji: '🔊',
		title: 'Listen with your favorite SoundFont.',
		image: Screenshot2,
		alt: 'Screenshot of midis2jam2',
		reversed: false,
		children: (
			<>
				<p>
					Experience midis2jam2 with high-quality sound, allowing you to play
					with any SoundFont of your choosing.
				</p>
				<p>
					Have a physical MIDI synthesizer? Connection is easy with simple
					configuration.
				</p>
			</>
		),
	},
	{
		emoji: '🪕',
		title: 'More instruments than ever before.',
		image: Screenshot4,
		alt: 'Screenshot of midis2jam2',
		reversed: false,
		children: (
			<>
				<p>
					midis2jam2 will complete the{' '}
					<Link
						href={
							'https://github.com/wyskoj/midis2jam2/blob/master/implementation.adoc#implementation-progress'
						}
						text={'GM specification'}
					/>
					, allowing every MIDI instrument to be visualized.
				</p>
				<p>
					Instruments including the clarinet, banjo, and helicopter have
					on-screen visuals—with more to come with every release.
				</p>
				<p>
					At the present time, midis2jam2 supports the visualization of any
					instrument 98% of the time.
				</p>
			</>
		),
	},
	{
		emoji: '🖥️',
		title: 'Free and open-source—forever.',
		image: Screenshot5,
		alt: 'Screenshot of midis2jam2',
		reversed: false,
		children: (
			<>
				<p>
					midis2jam2 is free software, licensed under the{' '}
					<Link
						href={'https://www.gnu.org/licenses/gpl-3.0.en.html'}
						text={'GNU General Public License'}
					/>
					. It will always be free and open-source. You can view the source code
					on{' '}
					<Link href={'https://github.com/wyskoj/midis2jam2'} text={'GitHub'} />
					.
				</p>
				<p>
					You can also contribute to the project by reporting bugs, requesting
					features, or submitting pull requests.
				</p>
			</>
		),
	},
];

export default function Promo() {
	return (
		<div className={'space-y-24 bg-container py-16'}>
			{promoRows.map((it, i) => {
				// Alternate row direction
				return (
					<PromoRow {...it} key={i} reversed={i % 2 !== 0}>
						{it.children}
					</PromoRow>
				);
			})}
		</div>
	);
}
