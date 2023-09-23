export interface Project {
	title: string;
	tags: string[];
	date: string;
	links: { label: string; href: string }[];
}

const unsortedProjects: Project[] = [
	{
		title: 'Sight-based mouse control software',
		tags: ['machine learning', 'python'],
		links: [
			{ label: 'GitHub', href: 'https://github.com/Scoobydoo181/Senior-Project-Fall-2022' },
			{ label: 'Blog Post', href: '/words/001' }
		],
		date: '2022-11-18'
	},
	{
		title: '"Jump!" mobile game',
		tags: ['unity', 'C#', 'iOS'],
		links: [{ label: 'GitHub', href: 'https://github.com/zacowan/Jump' }],
		date: '2019-01-15'
	},
	{
		title: '"Swamp Hacks" hackathon site and systems',
		tags: ['javascript', 'google cloud', 'firebase', 'nfc'],
		links: [
			{ label: 'Site GitHub', href: 'https://github.com/swamphacks/2020-site' },
			{ label: 'System GitHub', href: 'https://github.com/swamphacks/swamphacks-internal' }
		],
		date: '2020-02-01'
	}
];

/**
 * Sorts the projects in reverse-chronological order
 */
const sortedProjects = unsortedProjects.toSorted((a, b) => {
	const [dateA, dateB] = [new Date(a.date), new Date(b.date)];
	if (dateA == dateB) {
		return 0;
	}
	return dateA < dateB ? 1 : -1;
});

export const projects = sortedProjects;
