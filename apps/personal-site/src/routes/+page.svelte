<script lang="ts">
	import { LINKEDIN_HREF, TWITTER_HREF, WORKPlACE_HREF } from '$lib/links';
</script>

<svelte:head>
	<title>zacowan | Home</title>
</svelte:head>

<div class="prose mx-auto">
	<h1>Zachary Cowan</h1>
	<p>
		Hello - I'm <strong>Zach</strong>. I'm a software engineer currently working at
		<a href={WORKPlACE_HREF}>American Express</a>. Some of my current software engineering interests
		are:
	</p>
	<ul>
		<li>TypeScript</li>
		<li>Web dev tooling (esbuild, vite, svelte)</li>
		<li>GitHub Actions</li>
		<li>Monorepo tooling (pnpm, turborepo, changesets)</li>
		<li>Data analysis</li>
	</ul>
	<p>
		In my free time, I enjoy cooking, watching movies, and playing video games. I'm also starting to
		get into running! Feel free to connect with me on <a href={LINKEDIN_HREF}>LinkedIn</a> or
		<a href={TWITTER_HREF}>Twitter</a>
		if you'd like to chat.
	</p>
</div>
