<!-- Script not written in TS due to issue with mdsvex. -->
<script>
	import DateWithTags from './date-with-tags.svelte';
	import { page } from '$app/stores';

	$: postSubpath =
		$page.route.id
			?.split('words/')
			.filter((path) => !!path)
			.at(1) ?? 'Unknown';

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
	<div class="text-sm breadcrumbs pb-4">
		<ul>
			<li><a href="/words">Blog</a></li>
			<li><a class="capitalize" href={`/${postSubpath}`}>{postSubpath}</a></li>
		</ul>
	</div>
	<DateWithTags {date} {tags} class="mb-4" />
	<div class="prose mx-auto">
		<h1>{title}</h1>
		<slot />
	</div>
</article>
