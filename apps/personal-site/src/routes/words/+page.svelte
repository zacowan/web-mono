<script lang="ts">
	import DateWithTags from '$lib/components/date-with-tags.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col mx-auto max-w-prose">
	<div class="prose">
		<h1>Words</h1>
	</div>
	<ul class="mt-16">
		{#each data.posts as post}
			<li>
				<DateWithTags date={post.date} tags={post.tags} class="mb-4" />
				<a href={post.href} class="link block text-xl">{post.shortTitle}</a>
				<div class="divider" />
			</li>
		{/each}
	</ul>
</div>
