import type { PageServerLoad } from './$types';
import type { PostMetadata } from '$lib/types/post';
import path from 'path';

interface GlobValue {
	metadata: PostMetadata;
}

const getPostSlugFromPath = (postPath: string) => {
	const { dir } = path.parse(postPath);
	const lastIndexOfSSeparator = dir.lastIndexOf('/') + 1;
	const lastDirectory = dir.slice(lastIndexOfSSeparator);
	return lastDirectory;
};

const globs: Record<string, GlobValue> = await import.meta.glob('/src/routes/words/**/*.md', {
	eager: true
});

const posts = Object.entries(globs).map(([postPath, { metadata }]) => {
	const slug = getPostSlugFromPath(postPath);
	const href = `/words/${slug}`;
	return {
		slug,
		href,
		...metadata
	};
});

export const load: PageServerLoad = async () => {
	return {
		posts
	};
};
