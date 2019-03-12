import { RSAAction } from "redux-api-middleware";
import {
    GET_CAROUSEL_LOADING,
    GET_CAROUSEL_SUCCESS,
    GET_CAROUSEL_ERROR
} from "constants/carousel";

export type CarouselGetAction = RSAAction<
    typeof GET_CAROUSEL_LOADING,
    typeof GET_CAROUSEL_SUCCESS,
    typeof GET_CAROUSEL_ERROR
>;

export type CarouselRequestAction = {
    readonly type: typeof GET_CAROUSEL_LOADING;
};
export type CarouselErrorAction = {
    readonly type: typeof GET_CAROUSEL_ERROR;
};
export type CarouselSuccessAction = {
    readonly type: typeof GET_CAROUSEL_SUCCESS;
    readonly payload: Array<FeaturedProduct>;
};

export type CarouselAction =
    | CarouselErrorAction
    | CarouselRequestAction
    | CarouselSuccessAction;

export type FeaturedProduct = {
    readonly description: string;
    readonly heading: string;
    readonly imgSrc?: string;
};

export type CarouselState = {
    readonly hasError: boolean;
    readonly isLoading: boolean;
    readonly data: Array<FeaturedProduct>;
};
