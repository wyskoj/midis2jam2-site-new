import Link from '@/components/blue-link';
import OsTargetButton from '@/components/os-target-button';
import { sora } from '@/pages/_app';
import { formatDate } from '@/utils/date';
import { DownloadUrl, Release } from '@/utils/github';
import { SiApple, SiLinux, SiWindows11 } from 'react-icons/si';
import ReactMarkdown from 'react-markdown';

export default function Download(props: {
	release: Release;
	downloadUrls: DownloadUrl[];
}) {
	const markdown = props.release.body.split('\r\n').slice(4).join('\n');

	return (
		<div className={'container space-y-4 py-8 text-center text-white px-4'}>
			<div>
				<h2 className={`text-3xl font-extrabold uppercase ${sora.className}`}>
					Download
				</h2>
				<p className={'text-xs'}>
					{props.release.tag_name} &ndash;{' '}
					{formatDate(props.release.published_at)}
				</p>
			</div>
			<div
				className={
					'flex flex-col sm:flex-row max-w-2xl m-auto justify-center sm:space-x-4'
				}
			>
				<OsTargetButton
					icon={SiWindows11}
					name={'Windows'}
					url={props.downloadUrls.find(it => it.os === 'windows')!!.url}
				/>
				<OsTargetButton
					icon={SiApple}
					name={'macOS'}
					url={props.downloadUrls.find(it => it.os === 'macos')!!.url}
				/>
				<OsTargetButton
					icon={SiLinux}
					name={'Linux'}
					url={props.downloadUrls.find(it => it.os === 'unix')!!.url}
				/>
			</div>
			<p>
				<Link
					href={'https://github.com/wyskoj/midis2jam2/releases'}
					text={'Other platforms, versions, and source'}
				/>{' '}
				&bull; <Link href={'/builds'} text={'Nightly builds'} />
			</p>
			<h2 className={`text-3xl font-extrabold uppercase ${sora.className}`}>
				Changelog
			</h2>
			<ReactMarkdown
				className={
					'm-auto max-w-2xl rounded-xl bg-container-1 p-6 text-justify drop-shadow-lg'
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
