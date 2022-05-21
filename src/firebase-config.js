// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAUU-KDelzoq3XDB0zEQlNGP4OwsCDsf9E",
    authDomain: "rmad-02.firebaseapp.com",
    projectId: "rmad-02",
    storageBucket: "rmad-02.appspot.com",
    messagingSenderId: "853590535141",
    appId: "1:853590535141:web:58edd2f82bbd708f419d0c",
    measurementId: "G-HG6MH79TLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);