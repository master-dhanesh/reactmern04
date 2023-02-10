import { useRef, useState } from "react";

const Create = () => {
    const [error, setError] = useState(false);
    const input = useRef(null);
    const changevalue = () => {
        input.current.style.color = "blue";
        if (input.current.value.length < 4) {
            setError(true);
        } else {
            setError(false);
        }
    };
    return (
        <form className="w-25">
            <input
                ref={input}
                onChange={changevalue}
                className="form-control"
                placeholder="Text"
                type="text"
            />
            <small className="text-danger ">
                {error && "Lorem ipsum dolor sit."}
            </small>
            <button className="mt-3">Submit</button>
        </form>
    );
};

export default Create;
