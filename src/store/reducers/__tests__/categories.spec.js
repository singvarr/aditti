import {
    GET_CATEGORIES_LOADING,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR
} from "constants/categories";
import reducer, { initialState } from "reducers/categories";

describe("carousel reducer", () => {
    it("default: returns initial state", () => {
        expect(reducer(undefined, { type: "" })).toEqual(initialState);
    });

    it(`${GET_CATEGORIES_LOADING}: sets loading status`, () => {
        const action = { type: GET_CATEGORIES_LOADING };
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

    it(`${GET_CATEGORIES_SUCCESS}: unset loading and pass catalogue data`,
        () => {
            const payload = [
                { name: "tshirts", src: "img/categories/t-shirt.png" },
                { name: "shoes", src: "img/categories/shoes.png" },
                { name: "accesories", src: "img/categories/purse.png" }
            ];

            const action = {
                type: GET_CATEGORIES_SUCCESS,
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
        }
    );

    it(`${GET_CATEGORIES_ERROR}: sets error status and unsets loading`, () => {
        const action = { type: GET_CATEGORIES_ERROR };
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
