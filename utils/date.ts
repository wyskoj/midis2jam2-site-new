export function formatDate(date: string): string {
	const temp = new Date(date).toString();
	return `${temp.substring(4, 10)}, ${temp.substring(11, 15)}`;
}
