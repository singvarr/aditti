import { RSAA, RSAAction } from "redux-api-middleware";
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

const signInEndpoint = "/api/auth/signin";
const signUpEndpoint = "/api/auth/signup";
const signOutEndpoint = "/api/auth/signout";

export const headers = { "Content-Type": "application/json" };

export const postSignIn = (
    body: string
): RSAAction<
    typeof USER_SIGNIN_REQUEST,
    typeof USER_SIGNIN_SUCCESS,
    typeof USER_SIGNIN_ERROR
> => {
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

export const postSignUp = (
    body: string
): RSAAction<
    typeof USER_SIGNUP_REQUEST,
    typeof USER_SIGNUP_SUCCESS,
    typeof USER_SIGNUP_ERROR
> => {
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

export const postSignOut = (): RSAAction<
    typeof USER_SIGNOUT_REQUEST,
    typeof USER_SIGNOUT_SUCCESS,
    typeof USER_SIGNOUT_ERROR
> => {
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

export type AuthAction= {
    readonly type:
        | typeof USER_SIGNIN_REQUEST
        | typeof USER_SIGNIN_SUCCESS
        | typeof USER_SIGNIN_ERROR
        | typeof USER_SIGNUP_REQUEST
        | typeof USER_SIGNUP_SUCCESS
        | typeof USER_SIGNUP_ERROR
        | typeof USER_SIGNOUT_REQUEST
        | typeof USER_SIGNOUT_SUCCESS
        | typeof USER_SIGNOUT_ERROR;
};
