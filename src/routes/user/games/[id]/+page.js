import App from '../../../../fb';
import {
	getFirestore,
	collection,
	query,
	where,
	getDocs
} from 'firebase/firestore';
const db = getFirestore(App);
export async function load({ params }) {
	const q = query(collection(db, 'users'), where('name', '==', params.id));

	let data;
	const querySnapshot = await getDocs(q);

	querySnapshot.forEach((doc) => {
		console.log(doc.id, ' => ', doc.data());
		data = doc.data();
		console.log(data);
	});

	return { arrayofgames: data };
}
