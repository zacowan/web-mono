<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { LINKEDIN_HREF, TWITTER_HREF, WORKPlACE_HREF, GITHUB_HREF } from '$lib/links';
	import { IconGitHub, IconLinkedIn, IconTwitter } from '$lib/icons';

	$: paths = $page.route.id?.split('/').filter((path) => !!path) ?? [];
</script>

<nav class="navbar bg-base-100">
	<div class="flex-1 md:p-4">
		<a class="btn btn-ghost lowercase text-xl" href="/">zacowan</a>
	</div>
	<div class="flex-none md:p-4">
		<ul class="menu menu-horizontal uppercase space-x-2">
			<li><a href="/words">Words</a></li>
		</ul>
	</div>
</nav>

<main class="container mx-auto p-4 md:p-10 min-h-[75vh]">
	{#if paths.length > 0}
		<div class="text-sm breadcrumbs mb-12">
			<ul>
				<li><a href="/">Home</a></li>
				{#each paths as path}
					<li><a class="capitalize" href={`/${path}`}>{path}</a></li>
				{/each}
			</ul>
		</div>
	{/if}
	<slot />
</main>

<footer class="footer footer-center p-10 bg-base-200 text-base-content rounded mt-20">
	<nav class="grid grid-flow-col gap-4">
		<a class="link link-hover" href="/">Home</a>
		<a class="link link-hover" href="/words">Words</a>
	</nav>
	<nav>
		<div class="grid grid-flow-col gap-4">
			<a class="link fill-base-content" href={TWITTER_HREF}><IconTwitter /></a>
			<a class="link fill-base-content" href={LINKEDIN_HREF}><IconLinkedIn /></a>
			<a class="link fill-base-content" href={GITHUB_HREF}><IconGitHub /></a>
		</div>
	</nav>
</footer>
