import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { action } from "typesafe-actions";

import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from "constants/products";
import ProductType from "types/products";
import State from "types/state";

export const getProductsLoading = () => action(GET_PRODUCTS_LOADING);
export const getProductsSuccess = (data: Array<ProductType>) => {
    return action(GET_PRODUCTS_SUCCESS, { data });
};
export const getProductsError = () => action(GET_PRODUCTS_ERROR);

export const getProductsActions = {
    getProductsLoading,
    getProductsSuccess,
    getProductsError
};

export const productsEndpoint = "/api/products";
export const headers = { "Content-Type": "application/json" };

function getProducts(): ThunkAction<void, State, null, Action<string>> {
    return dispatch => {
        dispatch(getProductsLoading);

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
