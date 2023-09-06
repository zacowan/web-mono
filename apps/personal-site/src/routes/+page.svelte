<script lang="ts">
	import { LINKEDIN_HREF, TWITTER_HREF, WORKPlACE_HREF, GITHUB_HREF } from '$lib/links';
	import { IconLinkedIn, IconTwitter, IconGitHub } from '$lib/icons';
	import { SocialLink } from '$lib/components';
</script>

<div class="prose mx-auto">
	<h1>Zachary Cowan</h1>
	<p>
		Hello - I'm <strong>Zach</strong>. I'm a software engineer currently working at
		<a href={WORKPlACE_HREF}>American Express</a>. When I'm coding, I like:
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
		get into running!
	</p>
	<h2>Some Links</h2>
	<div class="flex gap-8 items-center">
		<SocialLink href={TWITTER_HREF} label="Twitter">
			<IconTwitter />
		</SocialLink>
		<SocialLink href={LINKEDIN_HREF} label="LinkedIn">
			<IconLinkedIn />
		</SocialLink>
		<SocialLink href={GITHUB_HREF} label="GitHub">
			<IconGitHub />
		</SocialLink>
	</div>
</div>
