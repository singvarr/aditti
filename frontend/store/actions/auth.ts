import { RSAA } from "redux-api-middleware";
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
import { SignInAction, SignUpAction, SignOutAction } from "types/auth";

const signInEndpoint = "/api/auth/signin";
const signUpEndpoint = "/api/auth/signup";
const signOutEndpoint = "/api/auth/signout";

export const headers = { "Content-Type": "application/json" };

export const postSignIn = (body: string): SignInAction => {
    return {
        [RSAA]: {
            headers,
            endpoint: signInEndpoint,
            method: "POST",
            types: [
                USER_SIGNIN_REQUEST,
                USER_SIGNIN_SUCCESS,
                USER_SIGNIN_ERROR
            ],
            body
        }
    };
};

export const postSignUp = (body: string): SignUpAction => {
    return {
        [RSAA]: {
            headers,
            endpoint: signUpEndpoint,
            method: "POST",
            types: [
                USER_SIGNUP_REQUEST,
                USER_SIGNUP_SUCCESS,
                USER_SIGNUP_ERROR
            ],
            body
        }
    };
};

export const postSignOut = (): SignOutAction => {
    return {
        [RSAA]: {
            headers,
            endpoint: signOutEndpoint,
            method: "POST",
            types: [
                USER_SIGNOUT_REQUEST,
                USER_SIGNOUT_SUCCESS,
                USER_SIGNOUT_ERROR
            ]
        }
    };
};
