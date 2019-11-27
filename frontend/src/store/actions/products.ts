import { action } from "typesafe-actions";
import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from "constants/products";
import ProductType from "types/products";
import { GetProductsType } from "types/state";

export const getProductsLoading = () => action(GET_PRODUCTS_LOADING);
export const getProductsSuccess = (products: Array<ProductType>) => {
    return action(GET_PRODUCTS_SUCCESS, { products });
};
export const getProductsError = () => action(GET_PRODUCTS_ERROR);

export const productsEndpoint = "/api/products";
export const headers = { "Content-Type": "application/json" };

function getProducts(): GetProductsType {
    return dispatch => {
        dispatch(getProductsLoading());

        return fetch(productsEndpoint, {
            headers,
            method: "GET"
        })
            .then(response => response.json())
            .then(data => dispatch(getProductsSuccess(data)))
            .catch(() => dispatch(getProductsError()));
    };
}

export default getProducts;
