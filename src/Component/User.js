import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userList } from '../store/asyncMethods/UserMethod';

const User = () => {

    const { loading, users, errors } = useSelector(state => state.UserReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userList());
    }, [dispatch]);

    return (
        <>
            {
                !loading ? (
                    users.map(user => (
                        <div>
                            <h3>{user.name}</h3>
                            <p>Website: {user.website}</p>
                            <Link to={`/usreDetails/${user.id}`}>See Details</Link>
                        </div>
                    ))
                ) : ('Loading...') ? !errors : <h3>{errors.message}</h3>
            }
        </>
    );
};

export default User;