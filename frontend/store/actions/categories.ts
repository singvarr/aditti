import { action } from "typesafe-actions";
import {
    GET_CATEGORIES_LOADING,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR
} from "constants/categories";
import { GetCategoriesType } from "types/state";
import CategoryType from "types/categories";

export const getCategoriesLoading = () => action(GET_CATEGORIES_LOADING);
export const getCategoriesSuccess = (categories: Array<CategoryType>) => {
    return action(GET_CATEGORIES_SUCCESS, { categories });
};
export const getCategoriesError = () => action(GET_CATEGORIES_ERROR);

export const categoriesEndpoint = "/api/categories";
export const headers = { "Content-Type": "application/json" };

function getCategories(): GetCategoriesType {
    return dispatch => {
        dispatch(getCategoriesLoading());

        return fetch(categoriesEndpoint, { headers, method: "GET" })
            .then(response => response.json())
            .then(data => dispatch(getCategoriesSuccess(data)))
            .catch(() => dispatch(getCategoriesError()));
    };
}

export default getCategories;
