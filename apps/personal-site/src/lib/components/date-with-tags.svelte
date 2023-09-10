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

<div class={clsx('uppercase text-xs gap-1', className)}>
	<span>{formattedDate}</span>
	<span>{@html dot}</span>
	{#each tags as tag, index}
		<span>
			<span>{tag}</span>
			{#if index < tags.length - 1}
				<span>{@html dot}</span>
			{/if}
		</span>
	{/each}
</div>
