import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { action } from "typesafe-actions";

import {
    GET_CAROUSEL_LOADING,
    GET_CAROUSEL_SUCCESS,
    GET_CAROUSEL_ERROR
} from "constants/carousel";
import { State } from "types/.";
import { FeaturedProductType } from "types/carousel";

const getCarouselLoading = () => action(GET_CAROUSEL_LOADING);
const getCarouselSuccess = (products: Array<FeaturedProductType>) => {
    return action(GET_CAROUSEL_SUCCESS, { products });
};
const getCarouselError = () => action(GET_CAROUSEL_ERROR);

export const getCarouselActions = {
    getCarouselLoading,
    getCarouselSuccess,
    getCarouselError
};

export const carouselEndpoint = "/api/carousel";
export const headers = { "Content-Type": "application/json" };

function getCarousel(): ThunkAction<void, State, null, Action<string>> {
    return dispatch => {
        dispatch(getCarouselLoading);

        return fetch(carouselEndpoint, {
            headers,
            method: "GET"
        })
            .then(response => response.json())
            .then(data => dispatch(getCarouselSuccess(data)))
            .catch(() => dispatch(getCarouselError));
    };
}

export default getCarousel;
