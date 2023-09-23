<script lang="ts">
	import DateWithTags from './date-with-tags.svelte';
	let className: string | undefined = undefined;
	let title: string;
	let tags: string[];
	let date: string;
	export { className as class, title, tags, date };
</script>

<div class={className}>
	<DateWithTags {date} {tags} class="mb-4" />
	<h2 class="card-title">{title}</h2>
	<div class="flex justify-end mt-4 gap-4">
		<slot />
	</div>
</div>
