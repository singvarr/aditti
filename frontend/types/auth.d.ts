import { RSAAction } from "redux-api-middleware";
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

export type SignInAction = RSAAction<
    typeof USER_SIGNIN_REQUEST,
    typeof USER_SIGNIN_SUCCESS,
    typeof USER_SIGNIN_ERROR
>;

export type SignUpAction = RSAAction<
    typeof USER_SIGNUP_REQUEST,
    typeof USER_SIGNUP_SUCCESS,
    typeof USER_SIGNUP_ERROR
>;

export type SignOutAction = RSAAction<
    typeof USER_SIGNOUT_REQUEST,
    typeof USER_SIGNOUT_SUCCESS,
    typeof USER_SIGNOUT_ERROR
>;

export type AuthAction = {
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

export type AuthState = {
    readonly isError: boolean;
    readonly isLoading: boolean;
    readonly status: boolean;
};
