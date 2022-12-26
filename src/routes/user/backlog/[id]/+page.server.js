import App from '../../../../fb';

import {
	getFirestore,
	collection,
	query,
	where,
	getDocs,
} from 'firebase/firestore';
const db = getFirestore(App);
export async function load({ params }) {
	const q = query(collection(db, 'users'), where('name', '==', params.id));

	let data;
	const querySnapshot = await getDocs(q);

	querySnapshot.forEach((doc) => {
		data = doc.data();
	});

	// return { arrayofgames: data.favourites };

	const res = await fetch(`https://api.igdb.com/v4/games/`, {
				method: 'POST',
				headers: {
					'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
					Authorization: 'Bearer hu9mx2ypl56r9t9rcimgekfa3x1vx8',
					'X-Requested-With': 'XMLHttpRequest'
				},
				body: `fields name, cover.image_id, follows;  where id=(${data.backlog});`
			})
	
	const data2 = await res.json();
	console.log("+++++++++++++++")
	console.log(data2);
	return { continents : data2, arrayofgames: data };
}
