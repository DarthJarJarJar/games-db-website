<script>
	let searchKey = '';
	import { goto } from '$app/navigation';

	function onSubmit() {
		goto('/search/' + searchKey);
		searchKey = '';
	}

	function reloadPage() {
		location.reload();
	}
	function onSubmitWhenOnSearch() {
		goto('/search/' + searchKey).then(
            () => goto('/search/' + searchKey)
        );
		searchKey = '';
	}

	import { page } from '$app/stores';
	$: path = $page.url.pathname;
</script>

{#if path.includes('/search/')}
	<form class="d-flex" role="search" on:submit|preventDefault={onSubmitWhenOnSearch}>
		<input
			class="form-control me-2"
			type="search"
			placeholder="Search Games"
			aria-label="Search Games"
			bind:value={searchKey}
		/>
		<button class="btn btn-outline-success" type="submit" on:click={() => onSubmit}>Search</button>
	</form>
{:else}<form class="d-flex" role="search" on:submit|preventDefault={onSubmit}>
		<input
			class="form-control me-2"
			type="search"
			placeholder="Search Games"
			aria-label="Search Games"
			bind:value={searchKey}
		/>
		<button class="btn btn-outline-success" type="submit" on:click={() => onSubmit}>Search</button>
	</form>
{/if}

<style>
	form {
		padding: 2rem;
	}
</style>
