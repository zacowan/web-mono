import { getRecentFeedItems } from '$lib/medium-rss';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const feedItems = await getRecentFeedItems();

	return {
		feedItems
	};
};
