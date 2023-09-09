<!-- Script not written in TS due to issue with mdsvex. -->
<script>
	/** @type {string} */
	export let title;
</script>

<article class="prose mx-auto">
	<h1>{title}</h1>
	<slot />
</article>
