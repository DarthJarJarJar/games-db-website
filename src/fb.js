// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAeJJkGzZtbkscLBox6erhJLwzuoYF5M2s',
	authDomain: 'hcg-games-hcg.firebaseapp.com',
	projectId: 'hcg-games-hcg',
	storageBucket: 'hcg-games-hcg.appspot.com',
	messagingSenderId: '72223728364',
	appId: '1:72223728364:web:03a6b1cea97038b7b67bc9',
	measurementId: 'G-2HS3TWJX5M'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const db = getFirestore(app);
