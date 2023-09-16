import Footer from '@/components/footer';
import DeviceFrame from '@/components/home/device-frame';
import Download from '@/components/home/download';
import Hero from '@/components/home/hero';
import Promo from '@/components/home/promo';
import {
	Release,
	getDownloadUrls,
	getReleaseDataFromGitHub,
	midis2jam2Repository,
} from '@/utils/github';

export async function getServerSideProps() {
	const releaseData = await getReleaseDataFromGitHub(
		midis2jam2Repository,
		process.env['github_auth']!!,
	);

	return { props: { releaseData } };
}

export default function Home({
	releaseData,
}: {
	releaseData: Release[] | undefined;
}) {
	const latestRelease = releaseData?.find(it => !it.prerelease)!!;
	const downloadUrls = getDownloadUrls(latestRelease);

	return (
		<div>
			<Hero />
			<a id={'description'} />
			<DeviceFrame />
			<Promo />
			<div className={'bg-container-alt'}>
				<a id={'download'} />
				{releaseData ? (
					<Download release={latestRelease} downloadUrls={downloadUrls} />
				) : (
					<div className={'container animate-pulse py-16'}>
						<div className={'flex w-full space-x-8'}>
							<div className="h-32 bg-slate-700 rounded grow"></div>
							<div className="h-32 bg-slate-700 rounded grow"></div>
							<div className="h-32 bg-slate-700 rounded grow"></div>
						</div>
						<div className={'h-64 w-full bg-slate-700 rounded mt-8 grow'}></div>
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
}
