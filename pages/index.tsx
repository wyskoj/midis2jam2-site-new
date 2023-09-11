import Download from '@/components/home/download';
import Hero from '@/components/home/hero';
import Promo from '@/components/home/promo';

export default function Home() {
	return (
		<div>
			<Hero />
			<div className={'bg-container'}>
				<Download />
				<Promo />
			</div>
		</div>
	);
}
