import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userList, userDetails } from '../store/asyncMethods/UserMethod';

const User = () => {

    const { loading, users, errors } = useSelector(state => state.UserReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(userList());
    }, [dispatch]);

    const fetchDetails = (id) => {
        dispatch(userDetails(id, navigate));
    }

    return (
        <>
            {
                !loading ? (
                    users.map(user => (
                        <div>
                            <h3>{user.name}</h3>
                            <p>Website: {user.website}</p>
                            <button type="button"
                                onClick={() => fetchDetails(user.id)}>see details</button>
                        </div>
                    ))
                ) : ('Loading...') ? !errors : <h3>{errors.message}</h3>
            }
        </>
    );
};

export default User;