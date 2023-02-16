import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadimageaction } from "../store/imageActions";

const Images = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncloadimageaction());
    }, []);

    return <div>Images</div>;
};

export default Images;
