<script>
	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<h1>Admin</h1>

<div class="submenu">
	{#each data.sections as section}
		<a href="/admin/{section.slug}">{section.title}</a>
	{/each}
</div>

<slot />
