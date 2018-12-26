import { RSAA } from "redux-api-middleware";
import {
    FETCH_PRODUCTS_LOADING,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR
} from "constants/products";

export const productsEndpoint = "/api/products";
export const headers = { "Content-Type": "application/json" };

function getProducts() {
    return {
        [RSAA]: {
            endpoint: productsEndpoint,
            headers,
            method: "GET",
            types: [
                FETCH_PRODUCTS_LOADING,
                FETCH_PRODUCTS_SUCCESS,
                FETCH_PRODUCTS_ERROR
            ],
            fetch
        }
    };
}

export default getProducts;
