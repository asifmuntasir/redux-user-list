import axios from "axios";

import {
    GET_USER_DETAILS_SUCCESS,
    GET_USER_FAILED,
    GET_USER_SUCCESS,
    USER_DETAILS_REQUEST,
    USER_REQUEST,
} from '../types';


export const userList = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_REQUEST
            });
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(res);
            dispatch({
                type: GET_USER_SUCCESS,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: GET_USER_FAILED,
                payload: error.message
            });
            console.log(error);
        }
    }
}

export const userDetails = (id) => {
    return async (dispatch) => {
        dispatch({
            type: USER_REQUEST
        });
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            dispatch({
                type: GET_USER_DETAILS_SUCCESS,
                payload: res.data
            });
            console.log(res.data);
        } catch (error) {
            dispatch({
                type: USER_DETAILS_REQUEST
            });
            console.log(error);
        }
    }
}