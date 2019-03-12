import { RSAA } from "redux-api-middleware";
import {
    GET_CATEGORIES_LOADING,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR
} from "constants/categories";
import { CategoriesGetAction } from "types/categories";

export const categoriesEndpoint = "/api/categories";
export const headers = { "Content-Type": "application/json" };

function getCategories(): CategoriesGetAction {
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

export default getCategories;
