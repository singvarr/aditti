import {
    GET_CATEGORIES_LOADING,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR
} from "constants/categories";
import { CategoriesAction } from "actions/categories";

export type CategoryType = {
    name: string;
    src: string;
};

export type CategoriesState = {
    data: Array<CategoryType>;
    hasError: boolean;
    isLoading: boolean;
};

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
