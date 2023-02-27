import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCLG-97SVtMi0y81Rls0Q8OVZXVaERmgx4",
    authDomain: "dummyrevision04.firebaseapp.com",
    projectId: "dummyrevision04",
    storageBucket: "dummyrevision04.appspot.com",
    messagingSenderId: "417693614537",
    appId: "1:417693614537:web:a1589a0084129f8f3be818",
    measurementId: "G-7NDEXX6N3P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
