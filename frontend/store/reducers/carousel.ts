import {
    GET_CAROUSEL_LOADING,
    GET_CAROUSEL_SUCCESS,
    GET_CAROUSEL_ERROR
} from "constants/carousel";
import { FeaturedProductsAction, FeaturedProductsState } from "types/carousel";

export const initialState: FeaturedProductsState = {
    data: [],
    isError: false,
    isLoading: false
};

function reducer(
    state: FeaturedProductsState = initialState,
    action: FeaturedProductsAction
) {
    switch (action.type) {
        case GET_CAROUSEL_LOADING:
            return { ...state, isLoading: true };

        case GET_CAROUSEL_SUCCESS:
            return {
                ...state,
                data: action.payload.products,
                isLoading: false
            };

        case GET_CAROUSEL_ERROR:
            return {
                ...state,
                isError: true,
                isLoading: false
            };

        default:
            return state;
    }
}

export default reducer;
