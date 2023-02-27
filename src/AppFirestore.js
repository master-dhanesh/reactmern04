import React from "react";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    setDoc,
    doc,
    deleteDoc,
} from "firebase/firestore";
import app from "./firebase/firebase";

const App = () => {
    const db = getFirestore(app);

    const createfirestore = async () => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                first: "Dsa",
                last: "Lacelove",
                born: 1815,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const readallfirestore = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            console.log(doc.id);
            console.log(doc.data());
        });
    };

    const updatefirestore = async () => {
        try {
            const usersRef = collection(db, "users");
            await setDoc(doc(usersRef, "aeEoXvTO053VyZY0a6iL"), {
                first: "Ala",
                last: "LanceLove",
                born: "1234",
            });
            console.log("User data updated");
        } catch (error) {
            console.log(error);
        }
    };

    const deletefirestore = async () => {
        try {
            const usersRef = collection(db, "users");
            const ref = doc(usersRef, "aeEoXvTO053VyZY0a6iL");
            await deleteDoc(ref);
            console.log("User data deleted");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mt-5 p-5">
            <button className="btn btn-success" onClick={createfirestore}>
                Add User Data
            </button>
            <button className="btn btn-info ms-2" onClick={readallfirestore}>
                Read All User Data
            </button>
            <button className="btn btn-warning ms-2" onClick={updatefirestore}>
                Update User Data
            </button>
            <button className="btn btn-danger ms-2" onClick={deletefirestore}>
                Delete User Data
            </button>
        </div>
    );
};

export default App;
