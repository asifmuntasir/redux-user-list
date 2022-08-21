import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userList } from '../store/asyncMethods/UserMethod';

const User = () => {

    const { loading, users, errors } = useSelector(state => state.UserReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userList());
    }, []);

    return (
        <>
            {
                !loading ? (
                    users.map(user => (
                        <div>
                            <h3>{user.name}</h3>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Website: {user.website}</p>
                        </div>
                    ))
                ) : ('Loading...') ? !errors : <h3>{errors.message}</h3>
            }
        </>
    );
};

export default User;