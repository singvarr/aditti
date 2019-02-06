import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_ERROR,
    USER_SIGNOUT_REQUEST,
    USER_SIGNOUT_SUCCESS,
    USER_SIGNOUT_ERROR
} from "constants/auth";

const initialState = {
    isError: false,
    isLoading: false,
    status: null
};

function reducer(state = initialState, action) {
    switch (action.type) {
    case USER_SIGNIN_REQUEST:
    case USER_SIGNOUT_REQUEST:
        return { ...state, isLoading: true };
    case USER_SIGNIN_ERROR:
    case USER_SIGNOUT_ERROR:
        return { ...state, isError: true, isLoading: false };
    case USER_SIGNIN_SUCCESS:
        return { ...state, isLoading: false, status: true };
    case USER_SIGNOUT_SUCCESS:
        return { ...state, isLoading: false, status: false };
    default:
        return state;
    }
}

export default reducer;
