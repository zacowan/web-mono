<script>
	import '../app.css';
	import { LINKEDIN_HREF, GITHUB_HREF, THREADS_HREF } from '$lib/links';
	import { IconGitHub, IconLinkedIn, IconThreads } from '$lib/icons';
</script>

<!-- TODO: is the accessible? -->
<nav class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</div>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="/">Home</a></li>
				<li><a href="/words">Blog</a></li>
				<li><a href="/projects">Projects</a></li>
			</ul>
		</div>
		<a href="/" class="btn btn-ghost text-xl">zacowan</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/">Home</a></li>
			<li><a href="/words">Blog</a></li>
			<li><a href="/projects">Projects</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<div class="flex-none grid grid-flow-col gap-4 pr-4">
			<a class="link fill-base-content" href={THREADS_HREF}><IconThreads /></a>
			<a class="link fill-base-content" href={LINKEDIN_HREF}><IconLinkedIn /></a>
			<a class="link fill-base-content" href={GITHUB_HREF}><IconGitHub /></a>
		</div>
	</div>
</nav>

<main class="container mx-auto p-4 md:p-10 min-h-[75vh]">
	<slot />
</main>

<footer class="footer footer-center p-10 bg-base-200 text-base-content rounded mt-20">
	<nav class="grid grid-flow-col gap-4">
		<a class="link link-hover" href="/">Home</a>
		<a class="link link-hover" href="/words">Blog</a>
		<a class="link link-hover" href="/projects">Projects</a>
	</nav>
	<nav>
		<div class="grid grid-flow-col gap-4">
			<a class="link fill-base-content" href={THREADS_HREF}><IconThreads /></a>
			<a class="link fill-base-content" href={LINKEDIN_HREF}><IconLinkedIn /></a>
			<a class="link fill-base-content" href={GITHUB_HREF}><IconGitHub /></a>
		</div>
	</nav>
</footer>
