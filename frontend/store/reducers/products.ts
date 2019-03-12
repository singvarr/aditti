import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from "constants/products";
import { ProductsAction, ProductsState } from "types/products";

export const defaultState: ProductsState = {
    data: [],
    hasError: false,
    isLoading: false
};

function reducer(
    state: ProductsState = defaultState,
    action: ProductsAction
): ProductsState {
    switch (action.type) {
        case GET_PRODUCTS_LOADING:
            return Object.assign({}, state, { isLoading: true });

        case GET_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {
                data: action.payload,
                isLoading: false
            });

        case GET_PRODUCTS_ERROR:
            return Object.assign({}, state, {
                hasError: true,
                isLoading: false
            });

        default:
            return state;
    }
}

export default reducer;
