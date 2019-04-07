import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from "constants/products";
import { ProductsAction, ProductsState } from "types/state";

export const defaultState: ProductsState = {
    data: [],
    isError: false,
    isLoading: false
};

function reducer(
    state: ProductsState = defaultState,
    action: ProductsAction
): ProductsState {
    switch (action.type) {
        case GET_PRODUCTS_LOADING:
            return { ...state, isLoading: true };

        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                data: action.payload.products,
                isLoading: false
            };

        case GET_PRODUCTS_ERROR:
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
