import { GET_USER_DETAILS_FAILED, GET_USER_DETAILS_SUCCESS, GET_USER_FAILED, GET_USER_SUCCESS, USER_DETAILS_REQUEST, USER_REQUEST } from "../types";

const initState = {
    loading: false,
    users: [],
    errors: [],
    details: {}
}

export const UserReducer = (state = initState, action) => {
    const { type, payload } = action;
    if (type === USER_REQUEST) {
        return {
            ...state,
            loading: true
        }
    } else if (type === GET_USER_SUCCESS) {
        return {
            ...state,
            loading: false,
            users: payload
        }
    } else if (type === GET_USER_FAILED) {
        return {
            ...state,
            loading: true,
            users: [],
            errors: payload
        }
    } else {
        return state;
    }
}

export const userDetails = (state = initState, action) => {
    const { type, payload } = action;
    if (type === GET_USER_DETAILS_SUCCESS) {
        return {
            ...state,
            details: payload
        }
    } else if (type === GET_USER_DETAILS_FAILED) {
        return {
            ...state,
            errors: payload
        }
    } else {
        return state;
    }

}