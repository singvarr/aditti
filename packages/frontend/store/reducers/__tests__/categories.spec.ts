import { ActionType } from "typesafe-actions";
import {
    GET_CATEGORIES_LOADING,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR
} from "constants/categories";
import reducer, { initialState } from "reducers/categories";
import {
    getCategoriesLoading,
    getCategoriesSuccess,
    getCategoriesError
} from "actions/categories";
import { CategoriesState } from "store/state";

describe("categories reducer", () => {
    it("returns initial state by default", () => {
        // Typecheck should fail in expect call
        // @ts-ignores
        expect(reducer(undefined, { type: "" })).toEqual(initialState);
    });

    it("sets loading status on fetch start", () => {
        const action: ActionType<typeof getCategoriesLoading> = {
            type: GET_CATEGORIES_LOADING
        };
        const state: CategoriesState = {
            data: [],
            isLoading: false,
            isError: false
        };
        const expectedState: CategoriesState = {
            data: [],
            isLoading: true,
            isError: false
        };

        expect(reducer(state, action)).toEqual(expectedState);
    });

    it("unsets loading status and passes data on successful fetch", () => {
        const payload = [
            { name: "tshirts", src: "img/categories/t-shirt.png" },
            { name: "shoes", src: "img/categories/shoes.png" },
            { name: "accesories", src: "img/categories/purse.png" }
        ];

        const action: ActionType<typeof getCategoriesSuccess> = {
            type: GET_CATEGORIES_SUCCESS,
            payload: { categories: payload }
        };
        const state: CategoriesState = {
            data: [],
            isLoading: true,
            isError: false
        };
        const expectedState: CategoriesState = {
            data: action.payload.categories,
            isLoading: false,
            isError: false
        };

        expect(reducer(state, action)).toEqual(expectedState);
    });

    it("sets error status and unsets loading on failed fetch", () => {
        const action: ActionType<typeof getCategoriesError> = {
            type: GET_CATEGORIES_ERROR
        };
        const state: CategoriesState = {
            data: [],
            isLoading: true,
            isError: false
        };
        const expectedState: CategoriesState = {
            data: [],
            isLoading: false,
            isError: true
        };

        expect(reducer(state, action)).toEqual(expectedState);
    });
});
