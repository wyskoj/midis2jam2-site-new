import React from 'react';

export type BuildRowProps = {
	branch: string;
	badge: React.JSX.Element | undefined;
	color: string | undefined;
	link?: React.JSX.Element;
	build: any;
};

export default function BuildRow({
	color,
	branch,
	badge,
	build,
	link,
}: BuildRowProps) {
	const { commitId, message, committed } = build;
	const commitURL = `https://github.com/wyskoj/midis2jam2/commit/${commitId}`;
	const shortCommitId = commitId.substring(0, 7);

	return (
		<tr className={color}>
			<td>{branch}</td>
			<td>
				<>
					{badge && (
						<>
							{badge}
							<br />
						</>
					)}
					<a href={commitURL}>{shortCommitId}</a>
					<br />
					<span>{message}</span>
				</>
			</td>
			<td>{committed}</td>
			<td>{link || ''}</td>
		</tr>
	);
}
