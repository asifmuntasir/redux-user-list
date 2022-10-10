import React from 'react';
import { useSelector } from 'react-redux';

const UserDetails = () => {

    const { details } = useSelector(state => state.UserDetailsReducer);
    console.log('details_component: ',details);
    console.log('details_component_id: ',details.id);

    return (
        <div>
            <h3>User Details for...</h3>
            <h2>id: {details.id}</h2>
            <h2>username: {details.username}</h2>
            <h2>name: {details.name}</h2>
        </div>
    );
};

export default UserDetails;