import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyAeJJkGzZtbkscLBox6erhJLwzuoYF5M2s',
	authDomain: 'hcg-games-hcg.firebaseapp.com',
	projectId: 'hcg-games-hcg',
	storageBucket: 'hcg-games-hcg.appspot.com',
	messagingSenderId: '72223728364',
	appId: '1:72223728364:web:03a6b1cea97038b7b67bc9',
	measurementId: 'G-2HS3TWJX5M'
};

export const app = initializeApp(firebaseConfig);
