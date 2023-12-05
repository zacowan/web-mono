<script lang="ts">
	import { LINKEDIN_HREF, TWITTER_HREF } from '$lib/links';
</script>

<svelte:head>
	<title>Home | zacowan</title>
</svelte:head>

<div class="prose mx-auto">
	<h1>About Me</h1>
	<p>
		Hey there! I'm <strong>Zach</strong>. I'm a software engineer who's all about cooking up the
		best developer experiences. I get a kick out of playing around with:
	</p>
	<ul>
		<li>TypeScript</li>
		<li>Rust</li>
		<li>Web dev tooling (esbuild, vite, svelte)</li>
		<li>GitHub Actions</li>
		<li>Monorepo tooling (pnpm, turborepo, changesets)</li>
		<li>Data analysis</li>
	</ul>
	<p>
		In my free time, I enjoy listening to podcasts, watching sci-fi/fantasy media, and trying out
		new video games. Feel free to connect with me on <a href={LINKEDIN_HREF}>LinkedIn</a>
		or
		<a href={TWITTER_HREF}>Twitter</a>
		if you'd like to chat.
	</p>
	<p>In the meantime, why don't you stay awhile?</p>
</div>
