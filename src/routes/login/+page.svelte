<script>
	export let form;
	console.log(form);
</script>

<div class="container">
	<h2>Login</h2>

	{#if form?.message}
		<div class="alert alert-danger">{form.message}</div>
	{/if}
	<form action="/login" method="post">
		<div>
			<input type="email" name="email" placeholder="email" value={form?.email || ''} />
		</div>
		<div>
			<input type="password" name="password" placeholder="password" />
		</div>
		<button type="submit">login</button>
	</form>
</div>
