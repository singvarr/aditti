import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { action } from "typesafe-actions";

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
import { State } from "types/.";

const signInEndpoint = "/api/auth/signin";
const signUpEndpoint = "/api/auth/signup";
const signOutEndpoint = "/api/auth/signout";

export const headers = { "Content-Type": "application/json" };

const postSignInRequest = () => action(USER_SIGNIN_REQUEST);
const postSignInSuccess = () => action(USER_SIGNIN_SUCCESS);
const postSignInError = () => action(USER_SIGNIN_ERROR);

export const postSignIn = (
    body: string
): ThunkAction<void, State, null, Action<string>> => {
    return dispatch => {
        dispatch(postSignInRequest());

        return fetch(signInEndpoint, { body, headers, method: "POST" })
            .then(() => dispatch(postSignInSuccess()))
            .catch(() => postSignInError());
    };
};

const postSignUpRequest = () => action(USER_SIGNUP_REQUEST);
const postSignUpSuccess = () => action(USER_SIGNUP_SUCCESS);
const postSignUpError = () => action(USER_SIGNUP_ERROR);

export const postSignUp = (
    body: string
): ThunkAction<void, State, null, Action<string>> => {
    return dispatch => {
        dispatch(postSignUpRequest());

        return fetch(signUpEndpoint, { body, headers, method: "POST" })
            .then(() => dispatch(postSignUpSuccess()))
            .catch(() => postSignUpError());
    };
};

const postSignOutRequest = () => action(USER_SIGNOUT_REQUEST);
const postSignOutSuccess = () => action(USER_SIGNOUT_SUCCESS);
const postSignOutError = () => action(USER_SIGNOUT_ERROR);

export const postSignOut = (): ThunkAction<
    void,
    State,
    null,
    Action<string>
> => {
    return dispatch => {
        dispatch(postSignOutRequest());

        return fetch(signOutEndpoint, { headers, method: "POST" })
            .then(() => dispatch(postSignOutSuccess()))
            .catch(() => postSignOutError());
    };
};

export const postAuthActions = {
    postSignInRequest,
    postSignInSuccess,
    postSignInError,
    postSignUpRequest,
    postSignUpSuccess,
    postSignUpError,
    postSignOutRequest,
    postSignOutSuccess,
    postSignOutError
};
