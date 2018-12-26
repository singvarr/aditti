import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from "constants/products";
import reducer, { defaultState } from "reducers/products";

describe("catalogue reducer", () => {
    it("default: returns initial state", () => {
        expect(reducer(undefined, { type: "" })).toEqual(defaultState);
    });

    it(`${GET_PRODUCTS_LOADING}: sets loading status`, () => {
        const action = { type: GET_PRODUCTS_LOADING };
        const state = {
            data: [],
            isLoading: false,
            hasError: false
        };
        const expectedState = {
            data: [],
            isLoading: true,
            hasError: false
        };

        expect(reducer(state, action)).toEqual(expectedState);
    });

    it(`${GET_PRODUCTS_SUCCESS}: unset loading and pass catalogue data`, () => {
        const payload = [
            {
                name: "branded shoes",
                price: 200,
                category: "shoes",
                src: "assets/img/items/shoes.png"
            },
            {
                name: "levis tshort",
                price: 300,
                category: "tshirts",
                src: "assets/img/items/t-short_levis.png"
            }
        ];

        const action = {
            type: GET_PRODUCTS_SUCCESS,
            payload
        };
        const state = {
            data: [],
            isLoading: true,
            hasError: false
        };
        const expectedState = {
            data: action.payload,
            isLoading: false,
            hasError: false
        };

        expect(reducer(state, action)).toEqual(expectedState);
    });

    it(`${GET_PRODUCTS_ERROR}: sets error status and unsets loading`, () => {
        const action = { type: GET_PRODUCTS_ERROR };
        const state = {
            data: [],
            isLoading: true,
            hasError: false
        };
        const expectedState = {
            data: [],
            isLoading: false,
            hasError: true
        };

        expect(reducer(state, action)).toEqual(expectedState);
    });
});
