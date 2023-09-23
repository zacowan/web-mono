<script lang="ts">
	import { convertToMonthDayYear } from '$lib/utils/date';
	import { clsx } from 'clsx';

	let className: string | undefined = undefined;
	export { className as class };
	export let date: string;
	export let tags: string[];
	const formattedDate = convertToMonthDayYear(date);
	const dot = '&#x2022;';
</script>

<div class={clsx('uppercase text-xs', className)}>
	<div class="pb-1">
		{formattedDate}
	</div>
	<ul class="flex gap-y-2">
		{#each tags as tag, index}
			<li>
				<span>{tag}</span>
				{#if index < tags.length - 1}
					<span class="pr-2">{@html dot}</span>
				{/if}
			</li>
		{/each}
	</ul>
</div>
