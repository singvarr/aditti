import { RSAA } from "redux-api-middleware";
import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_ERROR,
    USER_SIGNOUT_REQUEST,
    USER_SIGNOUT_SUCCESS,
    USER_SIGNOUT_ERROR
} from "constants/auth";

const signInEndpoint = "/api/signin";
const signOutEndpoint = "/api/signout";

export const postSignIn = () => {
    return {
        [RSAA]: {
            endpoint: signInEndpoint,
            method: "POST",
            types: [
                USER_SIGNIN_REQUEST,
                USER_SIGNIN_SUCCESS,
                USER_SIGNIN_ERROR
            ],
            fetch
        }
    };
};

export const postSignUp = () => {
    return {
        [RSAA]: {
            endpoint: signOutEndpoint,
            method: "POST",
            types: [
                USER_SIGNOUT_REQUEST,
                USER_SIGNOUT_SUCCESS,
                USER_SIGNOUT_ERROR
            ],
            fetch
        }
    };
};
