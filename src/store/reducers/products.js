import {
    FETCH_PRODUCTS_LOADING,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR
} from "constants/products";

export const defaultState = {
    data: [],
    hasError: false,
    isLoading: false
};

function reducer(state = defaultState, action) {
    switch (action.type) {
    case FETCH_PRODUCTS_LOADING:
        return Object.assign({}, state, { isLoading: true });

    case FETCH_PRODUCTS_SUCCESS:
        return Object.assign({}, state, {
            data: action.payload,
            isLoading: false
        });

    case FETCH_PRODUCTS_ERROR:
        return Object.assign({}, state, {
            hasError: true,
            isLoading: false
        });

    default:
        return state;
    }
}

export default reducer;
