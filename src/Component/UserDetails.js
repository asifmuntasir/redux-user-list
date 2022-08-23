import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { userDetails } from '../store/asyncMethods/UserMethod';

const UserDetails = () => {

    const id = useParams();

    const { loading } = useSelector(state => state.UserReducer);
    const { details, errors } = useSelector(state => state.userDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userDetails(id))
    }, [dispatch, id])

    return (
        <div>
            <h3>User Details for...</h3>
            {
                !loading ? (
                    details.map(detail => (
                        <div>
                            <h4>{detail.email}</h4>
                            <p>{detail.phone}</p>
                        </div>
                    ))
                ) : ('Loading...')
            }
        </div>
    );
};

export default UserDetails;