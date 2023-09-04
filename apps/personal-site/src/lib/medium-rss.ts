const MEDIUM_RSS_FEED_URL = 'https://medium.com/feed/@zacowan';
const RSS_2_JSON_URL = 'https://api.rss2json.com/v1/api.json';

const LIMIT = 3;

export interface RSSFeedItem {
	title: string;
	pubDate: string;
	link: string;
	guid: string;
	author: string;
	thumbnail: string;
	description: string;
	content: string;
	enclosure: unknown;
	categories: string[];
}

export const getRecentFeedItems = async () => {
	const feed = await fetch(`${RSS_2_JSON_URL}?rss_url=${MEDIUM_RSS_FEED_URL}`);
	const json = await feed.json();
	const items = json.items as RSSFeedItem[];
	const itemsLimit = items.length < LIMIT ? items.length : LIMIT;
	return items.slice(0, itemsLimit);
};
