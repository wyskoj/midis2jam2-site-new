import Footer from '@/components/footer';
import DeviceFrame from '@/components/home/device-frame';
import Download, { DownloadSkeleton } from '@/components/home/download';
import Hero from '@/components/home/hero';
import Promo from '@/components/home/promo';
import {
	DownloadUrl,
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

	const latestRelease = releaseData?.find(it => !it.prerelease)!!;
	const downloadUrls = getDownloadUrls(latestRelease);

	return { props: { latestRelease, downloadUrls } };
}

export default function Home({
	latestRelease,
	downloadUrls,
}: {
	latestRelease: Release | undefined;
	downloadUrls: DownloadUrl[] | undefined;
}) {
	return (
		<div>
			<Hero />
			<a id={'description'} />
			<DeviceFrame />
			<Promo />
			<div className={'bg-container-alt'}>
				<a id={'download'} />
				{latestRelease && downloadUrls ? (
					<Download release={latestRelease} downloadUrls={downloadUrls} />
				) : (
					<DownloadSkeleton />
				)}
			</div>
			<Footer />
		</div>
	);
}
