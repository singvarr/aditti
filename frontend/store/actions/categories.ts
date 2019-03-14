import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { action } from "typesafe-actions";

import {
    GET_CATEGORIES_LOADING,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR
} from "constants/categories";
import { State } from "types/.";
import { CategoryType } from "types/categories";

const getCategoriesLoading = () => action(GET_CATEGORIES_LOADING);
const getCategoriesSuccess = (products: Array<CategoryType>) => {
    return action(GET_CATEGORIES_SUCCESS, { products });
};
const getCategoriesError = () => action(GET_CATEGORIES_ERROR);

export const getCategoriesActions = {
    getCategoriesLoading,
    getCategoriesSuccess,
    getCategoriesError
};

export const categoriesEndpoint = "/api/categories";
export const headers = { "Content-Type": "application/json" };

function getCategories(): ThunkAction<void, State, null, Action<string>> {
    return dispatch => {
        dispatch(getCategoriesLoading());

        return fetch(categoriesEndpoint, { headers, method: "GET" })
            .then(response => response.json())
            .then(data => dispatch(getCategoriesSuccess(data)))
            .catch(() => dispatch(getCategoriesError()));
    };
}

export default getCategories;
