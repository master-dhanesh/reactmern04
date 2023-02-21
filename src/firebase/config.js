// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhvM7F2ZjvvsfsblzUaTqNTrlr33iXwxM",
    authDomain: "mern04-8b8c4.firebaseapp.com",
    projectId: "mern04-8b8c4",
    storageBucket: "mern04-8b8c4.appspot.com",
    messagingSenderId: "506076651879",
    appId: "1:506076651879:web:23ef189b91f59f48354fc2",
    measurementId: "G-WF6L4H39M6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
