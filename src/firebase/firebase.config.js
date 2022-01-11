import firebase from "firebase/app"
import "firebase/firestore"


    const firebaseConfig = {
        apiKey: "AIzaSyCEMVqBGd3DCM4n4w9rP2AftQsPHvhRmsA",
        authDomain: "todo-6459b.firebaseapp.com",
        projectId: "todo-6459b",
        storageBucket: "todo-6459b.appspot.com",
        messagingSenderId: "410304365961",
        appId: "1:410304365961:web:9711ac134d9ab7d1f98d58",
        measurementId: "G-4BQPE5T6J8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase