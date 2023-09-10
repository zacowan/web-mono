<script lang="ts">
	import { page } from '$app/stores';

	$: paths = $page.route.id?.split('/').filter((path) => !!path) ?? [];
</script>

<div class="text-sm breadcrumbs mb-12">
	<ul>
		<li><a href="/">Home</a></li>
		{#each paths as path}
			<li><a class="capitalize" href={`/${path}`}>{path}</a></li>
		{/each}
	</ul>
</div>
<slot />
