import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_ERROR,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_ERROR,
    USER_SIGNOUT_REQUEST,
    USER_SIGNOUT_SUCCESS,
    USER_SIGNOUT_ERROR
} from "constants/auth";
import { AuthAction, AuthState } from "types/state";

const initialState: AuthState = {
    isError: false,
    isLoading: false,
    status: false
};

function reducer(state: AuthState = initialState, action: AuthAction) {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
        case USER_SIGNOUT_REQUEST:
        case USER_SIGNUP_REQUEST:
            return { ...state, isLoading: true };
        case USER_SIGNIN_ERROR:
        case USER_SIGNUP_ERROR:
        case USER_SIGNOUT_ERROR:
            return { ...state, isError: true, isLoading: false };
        case USER_SIGNIN_SUCCESS:
            return { ...state, isLoading: false, status: true };
        case USER_SIGNUP_SUCCESS:
            return { ...state, isLoading: false };
        case USER_SIGNOUT_SUCCESS:
            return { ...state, isLoading: false, status: false };
        default:
            return state;
    }
}

export default reducer;
