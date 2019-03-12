import {
    GET_CATEGORIES_LOADING,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR
} from "constants/categories";
import { CategoriesAction, CategoriesState } from "types/categories";

export const initialState: CategoriesState = {
    data: [],
    hasError: false,
    isLoading: false
};

function reducer(
    state: CategoriesState = initialState,
    action: CategoriesAction
) {
    switch (action.type) {
        case GET_CATEGORIES_LOADING:
            return Object.assign({}, state, { isLoading: true });

        case GET_CATEGORIES_SUCCESS:
            return Object.assign({}, state, {
                data: action.payload,
                isLoading: false
            });

        case GET_CATEGORIES_ERROR:
            return Object.assign({}, state, {
                hasError: true,
                isLoading: false
            });

        default:
            return state;
    }
}

export default reducer;
