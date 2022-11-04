<script>
	import { goto, invalidate } from '$app/navigation';
	import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
	import App from '../../fb';

	import { each } from 'svelte/internal';
	import { fly } from 'svelte/transition';
	import {
		updateDoc,
		doc,
		getFirestore,
		collection,
		addDoc,
		query,
		where,
		getDoc,
		getDocs
	} from 'firebase/firestore';
	const auth = getAuth(App);
	import { onMount } from 'svelte';
	import PopularGame from '../../components/PopularGame.svelte';

	let name;
	let favs;
	let continents;
	let arrayofgames;

	function backlogButton() {
		goto('/testing');
	}
	function gamesButton() {
		goto(`/mygames/`);
	}

	onMount(() => {
		const auth = getAuth(App);
		auth.onAuthStateChanged(async function (user) {
			if (user) {
				let user = auth.currentUser;
				let db = getFirestore();
				const usersDoc = collection(db, 'users');
				let q = query(usersDoc, where('uid', '==', user.uid));

				const querySnapshot = await getDocs(q);

				querySnapshot.forEach((doc) => {
					name = doc.data().displayName;
					favs = doc.data().favourites;
					console.log(doc.data());
				});
				goto(`/user/home/${name.toLowerCase()}`);

				arrayofgames = favs;
				console.log(arrayofgames);
				if (arrayofgames != []) {
					await fetch(`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/games/`, {
						method: 'POST',
						headers: {
							'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
							Authorization: 'Bearer hu9mx2ypl56r9t9rcimgekfa3x1vx8',
							'X-Requested-With': 'XMLHttpRequest'
						},
						body: `fields name, cover.image_id, follows;  where id=(${arrayofgames});`
					})
						.then((r) => r.json())
						.then((data) => {
							continents = data;

							for (let c of data) {
								console.log(c);
							}
						});
				}
			} else {
				goto('/login');
			}
		});
	});

	const logout = async () => {
		signOut(auth)
			.then(() => {
				goto('/');
			})
			.catch((error) => {
				console.error(error);
			});
	};
</script>

<section in:fly={{ y: 50, duration: 400, delay: 500 }} out:fly={{ duration: 500 }}>
	<h1>Loading profile...</h1>
</section>

<style>
	.buttons {
		align-items: right;
		justify-content: right;
		align-content: right;
		margin-left: auto;
	}

	button {
		margin-top: 0.3rem;
		margin-bottom: 0.3rem;
	}

	.games {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 2rem;
		height: 20vh;
		margin-top: 2rem;
	}

	.akd {
		display: inline-flex;
		width: 100%;
	}

	h1 {
		margin-bottom: 2rem;
		margin-right: 2rem;
	}
</style>
