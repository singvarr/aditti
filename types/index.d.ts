import { StateType } from "typesafe-actions";
import reducer from "reducers/.";

export type FetchState = {
    readonly isError: boolean;
    readonly isLoading: boolean;
};

export type State = StateType<typeof reducer>;
