import Badge from '@/components/badge';
import Link from '@/components/blue-link';
import BuildRow, { BuildRowProps } from '@/components/build-row';
import Nav from '@/components/nav';
import { sora } from '@/pages/_app';
import React from 'react';
import { MdError, MdFiberNew, MdSell } from 'react-icons/md';

export type Build = {
	status: string;
	commitId: string;
	buildId: string;
	branch: string;
	finished: string;
	message: string;
};

type GithubTag = {
	name: string;
	commit: {
		sha: string;
	};
};

type FetchData = {
	appveyor: {
		builds: Build[];
	};
	github: GithubTag[];
};

export async function getServerSideProps() {
	const res = await fetch(
		`https://ci.appveyor.com/api/projects/wyskoj/midis2jam2/history?recordsNumber=999999`,
	);
	const appveyor: FetchData['appveyor'] =
		(await res.json()) as FetchData['appveyor'];

	const res2 = await fetch(
		'https://api.github.com/repos/wyskoj/midis2jam2/tags',
		{
			method: 'get',
			headers: new Headers({
				Authorization: `Basic ${process.env['github_auth']}`,
			}),
		},
	);
	const github: FetchData['github'] =
		(await res2.json()) as FetchData['github'];

	return { props: { data: { appveyor, github } } };
}

const ONE_MONTH = 30 * 24 * 60 * 60 * 1000;

function buildBuildRow(
	build: Build,
	latest: boolean,
	data: FetchData,
	i: number,
) {
	let badge;
	let color;

	// Latest badge
	if (latest) {
		badge = (
			<Badge text={'Latest build'} color={'bg-blue-800'} icon={MdFiberNew} />
		);
		color = 'bg-blue-950';
	}

	// Failed badge
	const failed = build['status'] === 'failed';
	if (failed) {
		badge = <Badge text={'Failed'} icon={MdError} color={'bg-red-800'} />;
		color = 'bg-red-950';
	}

	// Tag badge
	for (const tag of data['github']) {
		if (tag['commit']['sha'] === build['commitId']) {
			badge = <Badge text={tag['name']} color={'bg-green-800'} icon={MdSell} />;
			color = 'bg-green-950';
			break;
		}
	}

	const downloadLink = !failed ? (
		<Link
			href={
				'https://ci.appveyor.com/project/wyskoj/midis2jam2/builds/' +
				build['buildId'] +
				'/artifacts'
			}
			text={'Download JAR'}
		/>
	) : (
		<></>
	);

	const props: BuildRowProps = {
		branch: build['branch'],
		badge: badge,
		color: color,
		link: downloadLink,
		build: build,
	};

	return <BuildRow {...props} key={i} />;
}

export default function Builds({ data }: { data: FetchData }) {
	const tableRows: React.JSX.Element[] = [];
	let latest = true;
	const addedSHAs: string[] = [];

	for (let i = 0; i < data['appveyor']['builds'].length; i++) {
		const build = data['appveyor']['builds'][i];
		if (!build) continue;

		// If already added, skip it
		if (addedSHAs.find(s => s === build['commitId'])) continue;

		addedSHAs.push(build['commitId']);
		if (Date.now() - new Date(build['finished']).getTime() >= ONE_MONTH) {
			continue;
		}

		tableRows.push(buildBuildRow(build, latest, data, i));
		latest = false;
	}

	return (
		<main className={'min-h-screen bg-container'}>
			<Nav onIndexPage={false} />

			<div className={'container space-y-2 overflow-x-auto p-4 text-white'}>
				<h1 className={`text-2xl ${sora.className} font-black`}>Builds</h1>
				<p>
					This page lists experimental, developmental builds as they are
					produced. Features may be incomplete and broken—and are subject to
					change. To download the latest stable release of the program, visit{' '}
					<Link href={'/#download'} text={'the home page'} />.{' '}
					<Link href={'/running-experimental-builds'} text={'Learn how'} /> to
					run experimental builds.
				</p>
				<table className={`w-full min-w-[600px] bg-container-alt`}>
					<thead>
						<tr>
							<th>Branch</th>
							<th>Revision</th>
							<th>Timestamp</th>
							<th>Download</th>
						</tr>
					</thead>
					<tbody>{tableRows}</tbody>
				</table>
			</div>
		</main>
	);
}
