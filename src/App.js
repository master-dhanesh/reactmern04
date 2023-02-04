import React, { useEffect, useState } from "react";
import axios from "axios";
import loader from "./assets/loader.gif";
import ReactPaginate from "react-paginate";
import "./App.css";

const App = () => {
    const [images, setImages] = useState(null);

    const getimages = async (count = 1) => {
        console.log(count);
        try {
            const { data } = await axios.get(
                `https://picsum.photos/v2/list?page=${count}&limit=9`
            );
            setImages(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getimages();
    }, []);

    const onpagechange = ({ selected }) => {
        getimages(selected + 1);
    };

    return (
        <div
            style={{ height: "100vh" }}
            className="container d-flex w-100 justify-content-center align-items-center flex-column "
        >
            {images ? (
                <div>{JSON.stringify(images)}</div>
            ) : (
                <img style={{ width: "30vmax" }} src={loader} alt="" />
            )}

            <ReactPaginate
                breakLabel="..."
                nextLabel=">>"
                onPageChange={onpagechange}
                pageRangeDisplayed={5}
                pageCount={10}
                previousLabel="<<"
            />
        </div>
    );
};

export default App;
