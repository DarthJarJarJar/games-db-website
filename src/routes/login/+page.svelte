<script>
	import LoginForm from '../../components/LoginForm.svelte';
	import { fly } from 'svelte/transition';
</script>

<section in:fly={{ y: 50, duration: 400, delay: 500 }} out:fly={{ duration: 500 }}>
	<h1>Login</h1>

	<LoginForm title="Login" />
</section>
