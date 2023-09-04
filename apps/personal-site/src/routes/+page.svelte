<script lang="ts">
	import { LINKEDIN_HREF, TWITTER_HREF, WORKPlACE_HREF } from '$lib/links';
	import { ArticlePreview } from '$lib/components';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="prose mx-auto">
	<h1>Zachary Cowan</h1>
	<p>
		Hello - I'm <strong>Zach</strong>. I'm a software engineer currently working at
		<a href={WORKPlACE_HREF}>American Express</a>. Some fun facts about me:
	</p>
	<ul>
		<li>I love TypeScript</li>
		<li>I love setting up CI/CD pipelines</li>
		<li>I've got a lot of interest in tooling in web development (esbuild, prettier, etc.)</li>
		<li>I'm a nerd about movies</li>
		<li>I love trying new video games</li>
	</ul>
	<p>
		Want to connect with me? Feel free to reach out via <a href={LINKEDIN_HREF}>LinkedIn</a> or
		<a href={TWITTER_HREF}>Twitter</a> - I'd love to chat!
	</p>
	<h2>Recent Articles</h2>
	<div class="space-y-4">
		{#each data.feedItems as article (article.guid)}
			<ArticlePreview {article} />
		{/each}
	</div>
</div>
