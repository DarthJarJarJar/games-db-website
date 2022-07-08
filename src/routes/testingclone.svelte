<script>
	import ThemeToggle from "svelte-theme-toggle";
</script>

<main>
	<!-- Some Stuff here -->

	<ThemeToggle />
	<!-- Some other stuff here -->
   
</main>

<style>
   :root {
        --bg: #fff;
        --text-color: #000;
}

:global([data-theme="dark"]) {
        --bg: #121212;
        --text-color: #fff;
        --color: #fff
}

:global(body) {
        background-color: var(--bg);
        color: var(--text-color);
        transition: ease 0.5s;  /* Change the transition time by altering this property */
}
</style>