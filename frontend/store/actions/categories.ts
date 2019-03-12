import { RSAA, RSAAction } from "redux-api-middleware";
import {
    GET_CATEGORIES_LOADING,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR
} from "constants/categories";
import { CategoryType } from "reducers/categories";

export const categoriesEndpoint = "/api/categories";
export const headers = { "Content-Type": "application/json" };

function getCategories(): RSAAction<
    typeof GET_CATEGORIES_LOADING,
    typeof GET_CATEGORIES_SUCCESS,
    typeof GET_CATEGORIES_ERROR
> {
    return {
        [RSAA]: {
            endpoint: categoriesEndpoint,
            headers,
            method: "GET",
            types: [
                GET_CATEGORIES_LOADING,
                GET_CATEGORIES_SUCCESS,
                GET_CATEGORIES_ERROR
            ]
        }
    };
}

export type CategoriesLoadingAction = {
    readonly type: typeof GET_CATEGORIES_LOADING;
};
export type CategoriesErrorAction = {
    readonly type: typeof GET_CATEGORIES_ERROR;
};
export type CategoriesSuccessAction = {
    readonly type: typeof GET_CATEGORIES_SUCCESS;
    readonly payload: Array<CategoryType>;
};

export type CategoriesAction =
    | CategoriesSuccessAction
    | CategoriesLoadingAction
    | CategoriesErrorAction;

export default getCategories;
