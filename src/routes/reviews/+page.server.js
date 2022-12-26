import { getAuth } from 'firebase/auth';
import App from '../../fb';
const auth = getAuth(App);
export async function load({ params }) {
	console.log(auth.currentUser);

	return { reviewData: 1 };
}
