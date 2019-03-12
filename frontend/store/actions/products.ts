import { RSAA, RSAAction } from "redux-api-middleware";
import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from "constants/products";
import { ProductType } from "reducers/products";

export const productsEndpoint = "/api/products";
export const headers = { "Content-Type": "application/json" };

function getProducts(): RSAAction<
    typeof GET_PRODUCTS_LOADING,
    typeof GET_PRODUCTS_SUCCESS,
    typeof GET_PRODUCTS_ERROR
> {
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

export type ProductsErrorAction = {
    readonly type: typeof GET_PRODUCTS_ERROR;
};
export type ProductsLoadingAction = {
    readonly type: typeof GET_PRODUCTS_LOADING;
};
export type ProductsSuccessAction = {
    readonly type: typeof GET_PRODUCTS_SUCCESS;
    readonly payload: Array<ProductType>;
};

export type ProductsAction =
    | ProductsSuccessAction
    | ProductsLoadingAction
    | ProductsErrorAction;

export default getProducts;
