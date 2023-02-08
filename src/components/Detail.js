import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

const Detail = () => {
    const params = useParams();
    const location = useLocation();
    // console.log(params, location);
    return (
        <div>
            <h1 className="fs-1">Hello {params.name} 👋</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque, corporis?
            </p>
            <Link to="/user">Back</Link>
        </div>
    );
};

export default Detail;
