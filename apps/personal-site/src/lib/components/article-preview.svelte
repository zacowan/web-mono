<script lang="ts">
	import type { RSSFeedItem } from '$lib/medium-rss';

	export let article: RSSFeedItem;
</script>

<div aria-label={article.title}>
	<div>{article.pubDate}</div>
	<a href={article.link}>{article.title}</a>
	<span aria-label="categories" class="space-x-1">
		{#each article.categories as category (category)}
			<span class="badge badge-primary">{category}</span>
		{/each}
	</span>
</div>
