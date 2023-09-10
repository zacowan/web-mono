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

<article class="prose mx-auto">
	<DateWithTags {date} {tags} class="mb-4" />
	<h1>{title}</h1>
	<slot />
</article>
