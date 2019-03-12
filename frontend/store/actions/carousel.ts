import { RSAA, RSAAction } from "redux-api-middleware";
import {
    GET_CAROUSEL_LOADING,
    GET_CAROUSEL_SUCCESS,
    GET_CAROUSEL_ERROR
} from "constants/carousel";
import { Slide } from "reducers/carousel";

export const carouselEndpoint = "/api/carousel";
export const headers = { "Content-Type": "application/json" };

function getCarousel(): RSAAction<
    typeof GET_CAROUSEL_LOADING,
    typeof GET_CAROUSEL_SUCCESS,
    typeof GET_CAROUSEL_ERROR
> {
    return {
        [RSAA]: {
            endpoint: carouselEndpoint,
            headers,
            method: "GET",
            types: [
                GET_CAROUSEL_LOADING,
                GET_CAROUSEL_SUCCESS,
                GET_CAROUSEL_ERROR
            ]
        }
    };
}

export type CarouselRequestAction = {
    readonly type: typeof GET_CAROUSEL_LOADING;
};
export type CarouselErrorAction = {
    readonly type: typeof GET_CAROUSEL_ERROR;
};
export type CarouselSuccessAction = {
    readonly type: typeof GET_CAROUSEL_SUCCESS;
    readonly payload: Array<Slide>;
};

export type CarouselAction =
    | CarouselErrorAction
    | CarouselRequestAction
    | CarouselSuccessAction;

export default getCarousel;
