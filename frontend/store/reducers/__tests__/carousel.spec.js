import {
    GET_CAROUSEL_LOADING,
    GET_CAROUSEL_SUCCESS,
    GET_CAROUSEL_ERROR
} from "constants/carousel";
import reducer, { initialState } from "reducers/carousel";

describe("carousel reducer", () => {
    it("default: returns initial state", () => {
        expect(reducer(undefined, { type: "" })).toEqual(initialState);
    });

    it(`${GET_CAROUSEL_LOADING}: sets loading status`, () => {
        const action = { type: GET_CAROUSEL_LOADING };
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

    it(`${GET_CAROUSEL_SUCCESS}: unset loading and pass catalogue data`, () => {
        const payload = [
            {
                heading: "Cowhide Standard Crew",
                description: "White coloured, short-sleeved, printed T-shirt",
                imgSrc: "img/carousel/t-shirt.png"
            },
            {
                heading: "2",
                description: "Lorem ipsum dolor sit amet consectetur...",
                imgSrc: "img/carousel/t-shirt.png"
            }
        ];

        const action = {
            type: GET_CAROUSEL_SUCCESS,
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

    it(`${GET_CAROUSEL_ERROR}: sets error status and unsets loading`, () => {
        const action = { type: GET_CAROUSEL_ERROR };
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
