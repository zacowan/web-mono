<script lang="ts">
	export let href: string;
	export let label: string;
</script>

<a {href} class="inline-flex items-center space-x-2">
	<span class="fill-base-content">
		<slot />
	</span>
	<span>{label}</span>
</a>
