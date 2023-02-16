import axios from "axios";
import { loadimages } from "./imageSlice";

export const asyncloadimageaction = () => async (dispatch, getState) => {
    try {
        // console.log(getState());
        const { data } = await axios.get("https://picsum.photos/v2/list");
        dispatch(loadimages(data));
    } catch (error) {
        console.log(error);
    }
};
