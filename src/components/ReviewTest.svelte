<script>
	import { Rating } from 'svelte-stars-hover-rating';
	let includeReview = false;
	export let game;
	export let uid;
	export let name;
	export let gamename;
	console.log(name);
	console.log(uid);
	const gameId = game;
	let current = new Date();
	import { element } from 'svelte/internal';
	import {
		doc,
		setDoc,
		getFirestore,
		collection,
		addDoc,
		query,
		where,
		getDocs,
		updateDoc
	} from 'firebase/firestore';
	import App from '../../src/routes/fb';
	const db = getFirestore(App);
	import StarRating from '../svelte-star-rating';
	let ratingNum;
	let review;
	let isRated = false;
	let spoiler = false;
	import { fade, fly } from 'svelte/transition';
	const config = {
		showText: true
	};
	async function submitReview() {
		if (ratingNum > 0 && ratingNum <= 10) {
			if (!review) {
				review = '';
			}
			isRated = true;
			await setDoc(doc(db, 'games', `${gameId + uid}`), {
				gameId: gameId,
				reviewBy: uid,
				review: review,
				reviewAt: current.getTime(),
				rating: ratingNum,
				spoiler: spoiler,
				reviewerName: uid.toLowerCase(),
				gameName: gamename
			});
			updateRating(uid, gameId, ratingNum);
			getReviews();
		} else {
			alert('Rating must be between 0 and 5!');
		}
	}

	function editReview() {
		isRated = false;
	}
	async function updateRating(uid, game, rating) {
		const db = getFirestore(App);
		const usersDoc = collection(db, 'users');
		let q = query(usersDoc, where('displayName', '==', uid));
		const querySnapshot = await getDocs(q);
		let docId;
		let ratings;
		querySnapshot.forEach((doc) => {
			docId = doc.id;
			ratings = doc.data().ratings;
		});
		let gameFound = false;
		for (let gameobj of ratings) {
			if (gameobj.id === game) {
				gameFound = true;
				const searchObject = {};
				searchObject.id = game;
				searchObject.rating = gameobj.rating;
				const index = ratings.indexOf(searchObject);
				ratings.splice(index, 1);
				const newObject = {};
				newObject.id = game;
				newObject.rating = parseInt(rating);
				ratings.push(newObject);
			}
		}

		if (!gameFound) {
			const pushObj = {};
			pushObj.id = game;
			pushObj.rating = parseInt(rating);
			ratings.push(pushObj);
		}

		const gameRef = doc(db, 'users', docId);
		await updateDoc(gameRef, {
			ratings: ratings
		});
	}
	async function checkIfGameIsCurrentlyRated() {
		const usersDoc = collection(db, 'games');
		let q = query(usersDoc, where('reviewBy', '==', uid));
		const querySnapshot = await getDocs(q);
		let docId;
		let ratingsArray = [];
		querySnapshot.forEach((doc) => {
			docId = doc.id;
			let pushObj = {};
			pushObj.id = doc.data().gameId;
			pushObj.review = doc.data().review;
			pushObj.rating = doc.data().rating;
			pushObj.spoiler = doc.data().spoiler;
			ratingsArray.push(pushObj);
		});

		for (let gameobj of ratingsArray) {
			if (gameId === gameobj.id) {
				isRated = true;
				review = gameobj.review;
				spoiler = gameobj.spoiler;
				ratingNum = gameobj.rating;
			}
		}
	}
	checkIfGameIsCurrentlyRated();

	let currentReviews;
	let noRevs = true;
	async function getReviews() {
		const usersDoc = collection(db, 'games');
		let q = query(usersDoc, where('gameId', '==', gameId));

		const querySnapshot = await getDocs(q);
		if (querySnapshot.empty) {
			noRevs = true;
		} else {
			noRevs = false;
		}
		let docId;
		let ratingsArray = [];
		querySnapshot.forEach((doc) => {
			docId = doc.id;
			let pushObj = {};
			pushObj.reviewer = doc.data().reviewBy;
			pushObj.review = doc.data().review;
			pushObj.reviewTime = new Date(doc.data().reviewAt);
			pushObj.rating = doc.data().rating;
			pushObj.spoiler = doc.data().spoiler;
			ratingsArray.push(pushObj);
		});

		currentReviews = ratingsArray;
	}
	getReviews();
	getReviews().then(() => console.log(noRevs));
</script>

<div class="card" style="width: 100%; margin-top:1rem;">
	<div class="card-body">
		<h5 class="card-title">Rate and Review</h5>
		{#if !isRated}
			<Rating bind:rating={ratingNum} num="10" />
			<br />
		{/if}

		<div class="form-floating">
			{#if !isRated}
				<details open={review ? true : false}>
					<summary> Include a review? </summary>

					<textarea
						bind:value={review}
						class="form-control"
						placeholder="Write your review"
						id="floatingTextarea2"
						style="height: 150px"
					/>

					<div class="spoilers">
						<div class="check">
							<input type="checkbox" id="spoilers" name="interest" bind:checked={spoiler} />
							<label for="music">Spoilers</label>
						</div>
					</div>
				</details>
				<button
					on:click={submitReview}
					type="submit"
					class="btn btn-primary"
					style="margin-top: 0.5rem;">Submit</button
				>
			{:else}
				<StarRating rating={parseFloat(ratingNum)} {config} />
				{#if !review}
					<p>You haven't reviewed this game yet</p>
				{:else}
					<textarea
						disabled
						bind:value={review}
						class="form-control"
						placeholder="Leave a comment here"
						id="floatingTextarea2"
						style="height: 100px"
					/>
				{/if}
				<div class="buttons">
					<button
						disabled
						on:click={submitReview}
						type="submit"
						class="btn btn-success"
						style="margin-top: 0.5rem;">Review submitted!</button
					>
					<button
						on:click={editReview}
						type="submit"
						class="btn btn-primary"
						style="margin-top: 0.5rem; margin-left: 0.5rem;">Edit</button
					>
					<button
						type="button"
						class="btn btn-danger"
						style="margin-top: 0.5rem; margin-left: 0.5rem;">Delete</button
					>
				</div>
			{/if}
		</div>
	</div>
</div>
<div class="card" style="width: 100%; margin-top:2rem;">
	<div class="card-body">
		<h5 class="card-title">User reviews</h5>

		{#if noRevs}
			<p>This game does not have any reviews yet.</p>
		{/if}
		{#if currentReviews}
			{#if !noRevs}
				{#each currentReviews as review}
					<div class="card-body">
						<div class="card" style="width: 95%; margin-left: auto; margin-right: auto;">
							<div class="card-body">
								{#if review.reviewer.toLowerCase() != ''}
									<h5 class="card-title">
										Review by <a href={`/user/home/${review.reviewer.toLowerCase()}`}
											>{review.reviewer}</a
										>
									</h5>

									<StarRating rating={parseFloat(review.rating)} {config} />
									<h6 class="card-subtitle mb-2 text-muted">
										{review.reviewTime.toLocaleString('en-us', { month: 'long' }) +
											' ' +
											review.reviewTime.getDate() +
											' ' +
											review.reviewTime.getFullYear()}
									</h6>
									{#if review.spoiler}
										<details>
											<summary> This review has spoilers. Click to see</summary>
											<p class="card-text">{review.review}</p>
										</details>
									{:else}
										<p class="card-text">{review.review}</p>
									{/if}
								{:else}
									<p class="card-text">No</p>
								{/if}
							</div>
						</div>
					</div>
				{/each}
			{/if}
		{/if}
	</div>
</div>

<style>
	.buttons {
		display: inline-flex;
		flex-wrap: wrap;
	}

	details {
		border: 1px solid #aaa;
		border-radius: 4px;
		padding: 0.5em 0.5em 0;
	}

	summary {
		font-weight: bold;
		margin: -0.5em -0.5em 0;
		padding: 0.5em;
	}

	details[open] {
		padding: 0.5em;
	}

	details[open] summary {
		border-bottom: 1px solid #aaa;
		margin-bottom: 0.5em;
	}

	.spoilers {
		margin-bottom: 1rem;
	}
	.check {
		display: block;
		width: fit-content;
	}
	p {
		white-space: pre-wrap;
	}

	a {
		text-decoration: none;
	}
</style>
