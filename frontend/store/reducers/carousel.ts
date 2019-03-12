import {
    GET_CAROUSEL_LOADING,
    GET_CAROUSEL_SUCCESS,
    GET_CAROUSEL_ERROR
} from "constants/carousel";
import { CarouselAction } from "actions/carousel";

export type FeaturedProduct = {
    description: string;
    heading: string;
    imgSrc: string;
};

export type CarouselState = {
    hasError: boolean;
    isLoading: boolean;
    data: Array<FeaturedProduct>;
};

export const initialState: CarouselState = {
    data: [],
    hasError: false,
    isLoading: false
};

function reducer(state: CarouselState = initialState, action: CarouselAction) {
    switch (action.type) {
        case GET_CAROUSEL_LOADING:
            return Object.assign({}, state, { isLoading: true });

        case GET_CAROUSEL_SUCCESS:
            return Object.assign({}, state, {
                data: action.payload,
                isLoading: false
            });

        case GET_CAROUSEL_ERROR:
            return Object.assign({}, state, {
                hasError: true,
                isLoading: false
            });

        default:
            return state;
    }
}

export default reducer;
