import {
    GET_CATEGORIES_LOADING,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR
} from "constants/categories";
import { CategoriesAction, CategoriesState } from "types/state";

export const initialState: CategoriesState = {
    data: [],
    isError: false,
    isLoading: false
};

function reducer(
    state: CategoriesState = initialState,
    action: CategoriesAction
) {
    switch (action.type) {
        case GET_CATEGORIES_LOADING:
            return { ...state, isLoading: true };

        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                data: action.payload.categories,
                isLoading: false
            };

        case GET_CATEGORIES_ERROR:
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
