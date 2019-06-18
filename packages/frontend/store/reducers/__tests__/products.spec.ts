import { ActionType } from "typesafe-actions";
import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from "constants/products";
import {
    getProductsError,
    getProductsLoading,
    getProductsSuccess
} from "actions/products";
import reducer, { defaultState } from "reducers/products";
import { ProductsState } from "store/state";
import ProductType from "@aditti/types/products";

describe("catalogue reducer", () => {
    it("returns initial state by default", () => {
        // Typecheck should fail in expect call
        // @ts-ignore
        expect(reducer(undefined, { type: "" })).toEqual(defaultState);
    });

    it("sets loading status on fetch start", () => {
        const action: ActionType<typeof getProductsLoading> = {
            type: GET_PRODUCTS_LOADING
        };
        const state: ProductsState = {
            data: [],
            isLoading: false,
            isError: false
        };
        const expectedState: ProductsState = {
            data: [],
            isLoading: true,
            isError: false
        };

        expect(reducer(state, action)).toEqual(expectedState);
    });

    it("unsets loading and passes data on successful fetch", () => {
        const payload: Array<ProductType> = [
            {
                id: "1",
                name: "branded shoes",
                price: 200,
                category: "shoes",
                src: "assets/img/items/shoes.png"
            }
        ];

        const action: ActionType<typeof getProductsSuccess> = {
            type: GET_PRODUCTS_SUCCESS,
            payload: { products: payload }
        };
        const state: ProductsState = {
            data: [],
            isLoading: true,
            isError: false
        };
        const expectedState: ProductsState = {
            data: action.payload.products,
            isLoading: false,
            isError: false
        };

        expect(reducer(state, action)).toEqual(expectedState);
    });

    it("sets error status and unsets loading status on failed fetch", () => {
        const action: ActionType<typeof getProductsError> = {
            type: GET_PRODUCTS_ERROR
        };
        const state: ProductsState = {
            data: [],
            isLoading: true,
            isError: false
        };
        const expectedState: ProductsState = {
            data: [],
            isLoading: false,
            isError: true
        };

        expect(reducer(state, action)).toEqual(expectedState);
    });
});
