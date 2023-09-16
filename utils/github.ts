/**
 * A simplified version of the GitHub release object.
 */
export interface Release {
	draft: boolean;
	prerelease: boolean;
	tag_name: string;
	body: string;
	published_at: string;
	assets: Asset[];
}

interface Asset {
	name: string;
	browser_download_url: string;
}

/**
 * The two parts of a GitHub repository.
 */
export interface GitHubRepository {
	owner: string;
	repo: string;
}

export async function getReleaseDataFromGitHub(
	repository: GitHubRepository,
	auth: string,
): Promise<Release[] | undefined> {
	const response = await fetch(
		`https://api.github.com/repos/${repository.owner}/${repository.repo}/releases`,
		{
			method: 'GET',
			headers: new Headers({
				Authorization: `Basic ${auth}`,
			}),
		},
	);

	if (!response.ok) {
		return undefined;
	}

	return response.json();
}

/**
 * Calls the GitHub API to get a list of the available versions.
 *
 * @param repository The GitHub repository to get the versions from.
 * @param auth The authentication token to use.
 * @returns A list of versions, or undefined if the request fails.
 */
export async function getAllVersionsFromGitHub(
	repository: GitHubRepository,
	auth: string,
): Promise<string[] | undefined> {
	const data = await getReleaseDataFromGitHub(repository, auth);

	if (!data) {
		return undefined;
	}

	return data
		.filter((release: Release) => !release.draft && !release.prerelease)
		.map((release: Release) => release.tag_name);
}

export const midis2jam2Repository: GitHubRepository = {
	owner: 'wyskoj',
	repo: 'midis2jam2',
};

export interface DownloadUrl {
	os: OperatingSystem;
	url: string;
}

export type OperatingSystem = 'windows' | 'unix' | 'macos';

export function getDownloadUrls(latestRelease: Release): DownloadUrl[] {
	if (latestRelease === undefined) return [];
	let downloadUrls: DownloadUrl[] = [];

	for (let asset of latestRelease.assets) {
		let url: string;
		let os: OperatingSystem;

		if (asset.name.includes('windows-x64') && asset.name.includes('.exe')) {
			url = asset.browser_download_url;
			os = 'windows';
		} else if (asset.name.includes('unix') && asset.name.includes('.sh')) {
			url = asset.browser_download_url;
			os = 'unix';
		} else if (asset.name.includes('macos') && asset.name.includes('.dmg')) {
			url = asset.browser_download_url;
			os = 'macos';
		}

		if (url!! && os!!) {
			downloadUrls.push({ os, url });
		}
	}

	return downloadUrls;
}
