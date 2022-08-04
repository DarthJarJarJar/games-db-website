<script>
	import global from '../global.css';
	import { goto } from '$app/navigation';

	import { page } from '$app/stores';
	import SearchBox from './SearchBox.svelte';
	$: path = $page.url.pathname;
	import { getAuth } from 'firebase/auth';
	import App from '../routes/fb';
	const auth = getAuth(App);
	let searchedUser = '';
</script>

<nav class="navbar navbar-expand-lg ">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">Games DB</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="/">Home</a>
				</li>

				<li class="nav-item dropdown">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						class="nav-link dropdown-toggle"
						href="#"
						id="navbarDropdown"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Browse
					</a>
					<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
						<li><a class="dropdown-item" sveltekit:prefetch href="/browse/">All Games</a></li>
						<li><a class="dropdown-item" href="/upcoming/">Upcoming Games</a></li>
					</ul>
				</li>

				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="/profile">Profile</a>
				</li>

				<li class="nav-item dropdown">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						class="nav-link dropdown-toggle"
						href="#"
						id="navbarDropdown"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Search Users
					</a>

					<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
						<li><h6 class="dropdown-header">Search users</h6></li>
						<!-- <form   class="px-4 py-3"> --->

						<div class="form-stuff">
							<div class="form-group">
								<label for="exampleDropdownFormEmail1">Username</label>
								<input
									bind:value={searchedUser}
									class="form-control"
									id="usernamesearch"
									autocomplete="off"
								/>
							</div>

							<div class="form-group">
								<a href={`/user/home/${searchedUser.toLowerCase()}`} rel="external"
									><button type="submit" class="btn btn-primary" id="buttonsubmit">Search</button
									></a
								>
							</div>
						</div>
						<!--  </form> --->
					</ul>
				</li>
			</ul>
			<SearchBox />
		</div>
	</div>
</nav>

<!---->
<style>
	.form-stuff {
		margin: 16px;
	}
	#buttonsubmit {
		margin-top: 16px;
		margin-bottom: 16px;
	}

	#usernamesearch {
		width: 10rem;
	}
</style>
