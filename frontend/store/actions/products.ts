import { RSAA } from "redux-api-middleware";
import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from "constants/products";
import { GetProductsAction } from "types/products";

export const productsEndpoint = "/api/products";
export const headers = { "Content-Type": "application/json" };

function getProducts(): GetProductsAction {
    return {
        [RSAA]: {
            endpoint: productsEndpoint,
            headers,
            method: "GET",
            types: [
                GET_PRODUCTS_LOADING,
                GET_PRODUCTS_SUCCESS,
                GET_PRODUCTS_ERROR
            ]
        }
    };
}

export default getProducts;
