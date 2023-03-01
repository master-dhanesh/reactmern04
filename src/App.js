import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
    const [images, setImages] = useState(null);

    const fetchImages = async () => {
        const { data } = await axios.get("https://picsum.photos/v2/list");
        setImages(data);
    };

    useEffect(() => {
        fetchImages();
    }, []);
    return (
        <div className="container mt-5 p-5">
            <h1>Unsplash Stock Images</h1>
            <div className="w-100 d-flex justify-content-between flex-wrap">
                {images &&
                    images.map((i) => (
                        <img
                            className="mb-3 me-3"
                            height={200}
                            key={i.id}
                            src={i.download_url}
                        />
                    ))}
            </div>
        </div>
    );
};

export default App;
