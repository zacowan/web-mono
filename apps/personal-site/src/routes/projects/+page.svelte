<script lang="ts">
	import ProjectCard from '$lib/components/project-card.svelte';
	import { projects } from '$lib/projects';
</script>

<svelte:head>
	<title>Projects | zacowan</title>
</svelte:head>

<div class="flex flex-col mx-auto max-w-prose">
	<div class="prose">
		<h1>Projects</h1>
	</div>
	<ul class="mt-16">
		{#each projects as { title, links, tags, date } (title)}
			<li>
				<ProjectCard {title} {date} {tags} class="w-full">
					{#each links as { label, href } (href)}
						<a {href} class="btn btn-ghost link">{label}</a>
					{/each}
				</ProjectCard>
				<div class="divider" />
			</li>
		{/each}
	</ul>
</div>
