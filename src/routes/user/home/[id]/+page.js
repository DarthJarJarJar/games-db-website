import App from '../../../../fb';
import StarRating from '../../../../svelte-star-rating';

import {
	updateDoc,
	doc,
	getFirestore,
	collection,
	addDoc,
	query,
	where,
	getDoc,
	getDocs,
	orderBy
} from 'firebase/firestore';
const db = getFirestore(App);
export async function load({ params }) {
	const q = query(collection(db, 'users'), where('name', '==', params.id));

	let data;
	const querySnapshot = await getDocs(q);

	querySnapshot.forEach((doc) => {
		data = doc.data();
	});

	return { arrayofgames: data };
}
