// Source - https://github.com/agraboso/redux-api-middleware/issues/184#issue-324583681

declare module "redux-api-middleware" {
    import { Middleware } from "redux";

    export const RSAA: string;
    export const apiMiddleware: Middleware;

    export type HTTPVerb =
        | "GET"
        | "HEAD"
        | "POST"
        | "PUT"
        | "PATCH"
        | "DELETE"
        | "OPTIONS";

    export interface RSAAction<R, S, F> {
        [propName: string]: {
            endpoint: string;
            method: HTTPVerb;
            body?: any;
            headers?: { [propName: string]: string };
            credentials?: "omit" | "same-origin" | "include";
            bailout?: boolean;
            types: [R, S, F];
        };
    }
}
