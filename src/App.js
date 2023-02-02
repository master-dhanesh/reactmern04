import React, { useEffect, useState } from "react";

const App = () => {
    const [images, setImages] = useState(null);

    const getImages = () => {
        fetch("https://picsum.photos/v2/list")
            .then((d) => d.json())
            .then((data) => setImages(data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getImages();
    }, [images]);

    return (
        <div>
            {/*  */}
            <button onClick={getImages}>Get Images</button>
            {images ? JSON.stringify(images) : "loading..."}
            {/*  */}
        </div>
    );
};

export default App;
