import { RSAAction } from "redux-api-middleware";
import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from "constants/products";

export type GetProductsAction = RSAAction<
    typeof GET_PRODUCTS_LOADING,
    typeof GET_PRODUCTS_SUCCESS,
    typeof GET_PRODUCTS_ERROR
>;

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

export type ProductType = {
    category: string;
    id: string;
    name: string;
    price: number;
    src?: string;
};

export type ProductsState = {
    readonly data: Array<ProductType>;
    readonly hasError: boolean;
    readonly isLoading: boolean;
};
