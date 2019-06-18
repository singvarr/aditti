import { action } from "typesafe-actions";
import {
    GET_CAROUSEL_LOADING,
    GET_CAROUSEL_SUCCESS,
    GET_CAROUSEL_ERROR
} from "constants/carousel";
import { GetFeaturedProductsType } from "store/state";
import FeaturedProductType from "@aditti/types/carousel";

export const getCarouselLoading = () => action(GET_CAROUSEL_LOADING);
export const getCarouselSuccess = (products: Array<FeaturedProductType>) => {
    return action(GET_CAROUSEL_SUCCESS, { products });
};
export const getCarouselError = () => action(GET_CAROUSEL_ERROR);

export const carouselEndpoint = "/api/carousel";
export const headers = { "Content-Type": "application/json" };

function getCarousel(): GetFeaturedProductsType {
    return dispatch => {
        dispatch(getCarouselLoading());

        return fetch(carouselEndpoint, {
            headers,
            method: "GET"
        })
            .then(response => response.json())
            .then(data => dispatch(getCarouselSuccess(data)))
            .catch(() => dispatch(getCarouselError()));
    };
}

export default getCarousel;
