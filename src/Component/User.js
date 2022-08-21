import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userList } from '../store/asyncMethods/UserMethod';

const User = () => {

    const { loading } = useSelector(state => state.UserReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userList());
    })

    return (
        <>
            {/* {
                !loading ? (
                    {
                        users.map(user=> <h1>{user.name}</h1> )
                    }
                ) : 'Loading...'
            } */}
        </>
    );
};

export default User;