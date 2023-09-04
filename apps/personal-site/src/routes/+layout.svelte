<script>
	import '../app.css';
	import { MEDIUM_HREF } from '$lib/links';
</script>

<nav class="navbar bg-base-100">
	<div class="flex-1 px-4">
		<a class="btn btn-ghost lowercase text-xl" href="/">zacowan</a>
	</div>
	<div class="flex-none px-4">
		<ul class="menu menu-horizontal uppercase">
			<li><a href={MEDIUM_HREF}>Posts</a></li>
		</ul>
	</div>
</nav>

<main class="container mx-auto p-4">
	<slot />
</main>
