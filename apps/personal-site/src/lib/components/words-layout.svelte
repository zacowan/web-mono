<!-- Script not written in TS due to issue with mdsvex. -->
<script>
	import DateWithTags from './date-with-tags.svelte';

	/** @type {string} */
	export let title;
	/** @type {string} */
	export let date;
	/** @type {string[]} */
	export let tags;
</script>

<svelte:head>
	<title>zacowan | {title}</title>
</svelte:head>

<article class="mx-auto max-w-prose">
	<DateWithTags {date} {tags} class="mb-4" />
	<div class="prose mx-auto">
		<h1>{title}</h1>
		<slot />
	</div>
</article>
