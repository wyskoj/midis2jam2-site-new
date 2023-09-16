import Badge from '@/components/badge';
import Link from '@/components/blue-link';
import Nav from '@/components/nav';
import { sora } from '@/pages/_app';
import { MdFiberNew, MdSell } from 'react-icons/md';

export async function getServerSideProps() {
	const res = await fetch(
		`https://ci.appveyor.com/api/projects/wyskoj/midis2jam2/history?recordsNumber=999999`,
	);
	const appveyor = await res.json();
	const res2 = await fetch(
		'https://api.github.com/repos/wyskoj/midis2jam2/tags',
		{
			method: 'get',
			headers: new Headers({
				Authorization: `Basic ${process.env['github_auth']}`,
			}),
		},
	);
	const github = await res2.json();

	return { props: { data: { appveyor: appveyor, github: github } } };
}

export default function Builds({ data }: any) {
	let rows = [];
	let first = true;
	let addedSHAs: any[] = [];
	for (let build of data['appveyor']['builds']) {
		if (addedSHAs.find(s => s === build['commitId'])) break;
		addedSHAs.push(build['commitId']);
		if (
			Date.now() - new Date(build['finished']).getTime() <
			30 * 24 * 60 * 60 * 1000
		) {
			let badges = [];
			let rowColor = '';
			let displayLink = true;

			if (first) {
				badges.push(
					<Badge
						text={'Latest build'}
						color={'bg-blue-800'}
						icon={MdFiberNew}
					/>,
				);
				rowColor = 'table-primary';
			}
			if (build['status'] === 'failed') {
				badges.push(
					<span
						className="badge bg-red-800"
						style={{ verticalAlign: 'text-bottom' }}
					>
						Build failed
					</span>,
				);
				rowColor = 'table-danger';
				displayLink = false;
			}

			for (let tag of data['github']) {
				if (tag['commit']['sha'] === build['commitId']) {
					badges.push(
						<Badge text={tag['name']} color={'bg-green-800'} icon={MdSell} />,
					);
					rowColor = 'table-success';
					break;
				}
			}

			let downloadLink = (
				<Link
					href={
						'https://ci.appveyor.com/project/wyskoj/midis2jam2/builds/' +
						build['buildId'] +
						'/artifacts'
					}
					text={'Download JAR'}
				/>
			);
			rows.push(
				<tr className={rowColor}>
					<td>{build['branch']}</td>
					<td>
						{
							<>
								{badges.length ? (
									<>
										{' '}
										{badges} <br />
									</>
								) : (
									<></>
								)}
								<a
									href={
										'https://github.com/wyskoj/midis2jam2/commit/' +
										build['commitId']
									}
								>
									{' '}
									{build['commitId'].substr(0, 7)}
								</a>
								<br />
								<span>{build['message']}</span>
							</>
						}
					</td>
					<td>{build['committed']}</td>
					<td>{displayLink ? downloadLink : <></>}</td>
				</tr>,
			);
			first = false;
		}
	}

	return (
		<main className={'bg-container min-h-screen'}>
			<Nav onIndexPage={false} />

			<div className={'container p-4 text-white space-y-2 overflow-x-auto'}>
				<h1 className={`text-2xl ${sora.className} font-black`}>Builds</h1>
				<p>
					This page lists experimental, developmental builds as they are
					produced. Features may be incomplete and broken—and are subject to
					change. To download the latest stable release of the program, visit{' '}
					<Link href={'/'} text={'the home page'} />.{' '}
					<Link href={'/running-experimental-builds'} text={'Learn how'} /> to
					run experimental builds.
				</p>
				<table className={`w-full bg-container-alt`}>
					<thead>
						<tr>
							<th>Branch</th>
							<th>Revision</th>
							<th>Timestamp</th>
							<th>Download</th>
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</table>
			</div>
		</main>
	);
}
