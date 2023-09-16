import { getAllVersionsFromGitHub } from '@/utils/github';
import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
	status: string;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	const requestVersion = (() => {
		const raw = req.query['v'];
		if (typeof raw !== 'string' || !raw) return undefined;
		return ensureVPrefix(raw);
	})();

	const auth = process.env['github_auth'];

	if (auth === undefined) {
		res.status(500).json({ status: 'Failed to fetch versions.' });
		return;
	}

	const versions = await getAllVersionsFromGitHub(
		{
			owner: 'wyskoj',
			repo: 'midis2jam2',
		},
		auth,
	);

	if (requestVersion === undefined) {
		res.status(400).json({ status: 'No version provided.' });
		return;
	}

	if (versions === undefined) {
		res.status(500).json({ status: 'Failed to fetch versions.' });
		return;
	}

	if (!versions.includes(requestVersion)) {
		res.status(400).json({ status: 'Version not found.' });
		return;
	}

	if (versions[0] === requestVersion) {
		res.status(200).json({ status: 'Up to date.' });
		return;
	}

	res.status(200).json({ status: 'Out of date.' });
}

/**
 * Ensures that the version string starts with a 'v'.
 *
 * @param version - The version string.
 * @returns The version string with a 'v' prefix.
 */
function ensureVPrefix(version: string) {
	return version.startsWith('v') ? version : `v${version}`;
}
