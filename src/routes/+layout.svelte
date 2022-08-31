<script>
	
	let searchKey = '';
	import { goto } from '$app/navigation';

	import { page } from '$app/stores';
	import Navbar from '../components/Navbar.svelte';
</script>

<svelte:head>
	<title>Games DB</title>
</svelte:head>

<Navbar />

<slot />
