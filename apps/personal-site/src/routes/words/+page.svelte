<script lang="ts">
	import { convertToMonthDayYear } from '$lib/utils/date';
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
				<span class="text-xs mb-4 uppercase">{convertToMonthDayYear(post.date)}</span>
				<a href={post.href} class="link block text-xl">{post.shortTitle}</a>
				<ul class="text-xs mt-2 gap-1 uppercase">
					{#each post.tags as tag, index}
						<li class="inline">
							<span>{tag}</span>
							{#if index < post.tags.length - 1}
								<span>&#x2022;</span>
							{/if}
						</li>
					{/each}
				</ul>
				<div class="divider" />
			</li>
		{/each}
	</ul>
</div>
