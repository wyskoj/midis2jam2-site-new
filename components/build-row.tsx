import { Build } from '@/pages/builds';
import React from 'react';

export type BuildRowProps = {
	branch: string;
	badge: React.JSX.Element | undefined;
	color: string | undefined;
	link?: React.JSX.Element;
	build: Build;
};

export default function BuildRow({
	color,
	branch,
	badge,
	build,
	link,
}: BuildRowProps) {
	const { commitId, message, finished } = build;
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
			<td>{finished}</td>
			<td>{link || ''}</td>
		</tr>
	);
}
