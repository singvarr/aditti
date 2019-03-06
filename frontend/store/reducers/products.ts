import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from "constants/products";

export type Product = {
    name: string;
    price: number;
};

export type productsState = {
    readonly data: Array<Product>;
    readonly hasError: boolean;
    readonly isLoading: boolean;
};

export const defaultState: productsState = {
    data: [],
    hasError: false,
    isLoading: false
};

function reducer(state: productsState = defaultState, action): productsState {
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
