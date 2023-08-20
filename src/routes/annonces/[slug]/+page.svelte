<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>{data.annonce.title}</h1>
<div>{@html data.annonce.content}</div>
