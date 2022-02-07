import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyRLWrNrzcQ07BWdCk8O-95qvjFXr9PRI",
    authDomain: "gif-tech.firebaseapp.com",
    projectId: "gif-tech",
    storageBucket: "gif-tech.appspot.com",
    messagingSenderId: "26255106893",
    appId: "1:26255106893:web:7169e61b16d4940fd94d04"
};

firebase.initializeApp(firebaseConfig)

export default firebase
export const storage = firebase.storage()
export const firestore = firebase.firestore()