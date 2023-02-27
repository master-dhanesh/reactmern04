import React from "react";
import app from "./firebase/firebase";
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytes,
    deleteObject,
    listAll,
} from "firebase/storage";
const App = () => {
    const storage = getStorage(app);

    const createStorage = async (e) => {
        try {
            const file = e.target.files[0];
            const storageRef = ref(storage, file.name);
            await uploadBytes(storageRef, file);
            const downloadurl = await getDownloadURL(storageRef);
            console.log(downloadurl);
        } catch (error) {
            console.log(error);
        }
    };

    const readallStorage = async () => {
        const listRef = ref(storage, "");

        listAll(listRef)
            .then((res) => {
                res.prefixes.forEach((folderRef) => {
                    console.log(folderRef);
                });
                res.items.forEach((itemRef) => {
                    console.log(itemRef);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const updateStorage = async () => {};

    const deleteStorage = async () => {
        try {
            const storageRef = ref(storage, "model11.jpg");
            await deleteObject(storageRef);
            console.log("Image Deleted!");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mt-5 p-5">
            <input
                type="file"
                className="form-control w-50 mb-3"
                onChange={createStorage}
            />
            <button className="btn btn-info ms-2" onClick={readallStorage}>
                Read All Multimedia
            </button>
            <button className="btn btn-warning ms-2" onClick={updateStorage}>
                Update Multimedia
            </button>
            <button className="btn btn-danger ms-2" onClick={deleteStorage}>
                Delete Multimedia
            </button>
        </div>
    );
};

export default App;
