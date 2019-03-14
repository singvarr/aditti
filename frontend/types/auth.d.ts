import { ActionType } from "typesafe-actions";
import { postAuthActions } from "actions/auth";
import { FetchState } from ".";

export type AuthAction = ActionType<typeof postAuthActions>;
export type AuthState = {
    readonly status: boolean;
} & FetchState;
