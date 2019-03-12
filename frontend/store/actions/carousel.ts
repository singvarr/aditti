import { RSAA } from "redux-api-middleware";
import {
    GET_CAROUSEL_LOADING,
    GET_CAROUSEL_SUCCESS,
    GET_CAROUSEL_ERROR
} from "constants/carousel";
import { CarouselGetAction } from "types/carousel";

export const carouselEndpoint = "/api/carousel";
export const headers = { "Content-Type": "application/json" };

function getCarousel(): CarouselGetAction {
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

export default getCarousel;
