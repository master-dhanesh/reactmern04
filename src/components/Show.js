import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../store/userSlice";

const Show = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.userReducer);

    const deleteUserHandler = (id) => {
        dispatch(deleteUser(id));
    };

    return (
        <ol className=" container list-group w-50">
            {users.map((user) => (
                <li
                    key={user.id}
                    className=" d-flex justify-content-between mb-3 list-group-item"
                >
                    <span>
                        <strong> {user.username}</strong> <br /> {user.bio}
                    </span>

                    <span onClick={() => deleteUserHandler(user.id)}>❌</span>
                </li>
            ))}
        </ol>
    );
};

export default Show;
