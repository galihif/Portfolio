import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyRLWrNrzcQ07BWdCk8O-95qvjFXr9PRI",
    authDomain: "gif-tech.firebaseapp.com",
    projectId: "gif-tech",
    storageBucket: "gif-tech.appspot.com",
    messagingSenderId: "26255106893",
    appId: "1:26255106893:web:7169e61b16d4940fd94d04"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);