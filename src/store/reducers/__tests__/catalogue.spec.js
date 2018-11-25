import {
    FETCH_CATALOGUE_LOADING,
    FETCH_CATALOGUE_SUCCESS,
    FETCH_CATALOGUE_ERROR
} from "constants/catalogue";
import reducer, { defaultState } from "reducers/catalogue";

describe("catalogue reducer", () => {
    it("default: returns initial state", () => {
        expect(reducer(undefined, { type: "" })).toEqual(defaultState);
    });

    it(`${FETCH_CATALOGUE_LOADING}: sets loading status`, () => {
        const action = { type: FETCH_CATALOGUE_LOADING };
        const state = {
            data: { catalogue: { items: [] }, categories: [], slides: [] },
            isLoading: false,
            hasError: false
        };
        const expectedState = {
            data: { catalogue: { items: [] }, categories: [], slides: [] },
            isLoading: true,
            hasError: false
        };

        expect(reducer(state, action)).toEqual(expectedState);
    });

    it(
        `${FETCH_CATALOGUE_SUCCESS}: unset loading and pass catalogue data`,
        () => {
            const payload = {
                categories: [
                    {
                        name: "tshirts",
                        src: "./assets/img/categories/t-shirt.png"
                    },
                    { name: "shoes", src: "./assets/img/categories/shoes.png" }
                ],
                catalogue: {
                    items: [
                        {
                            name: "branded shoes",
                            price: 200,
                            category: "shoes",
                            src: "./assets/img/items/shoes.png",
                            quantity: 0
                        },
                        {
                            name: "levis tshort",
                            price: 300,
                            category: "tshirts",
                            src: "./assets/img/items/t-short_levis.png",
                            quantity: 0
                        }
                    ]
                },
                slides: [
                    {
                        heading: "Cowhide Standard Crew",
                        description: "bla-bla-bla 1",
                        imgSrc: "./assets/img/slider/t-shirt.png"
                    },
                    {
                        heading: "2",
                        description: "bla-bla-bla 2",
                        imgSrc: "./assets/img/slider/t-shirt.png"
                    }
                ]
            };

            const action = {
                type: FETCH_CATALOGUE_SUCCESS,
                payload
            };
            const state = {
                data: { catalogue: { items: [] }, categories: [], slides: [] },
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

    it(`${FETCH_CATALOGUE_ERROR}: sets error status and unsets loading`, () => {
        const action = { type: FETCH_CATALOGUE_ERROR };
        const state = {
            data: { catalogue: { items: [] }, categories: [], slides: [] },
            isLoading: true,
            hasError: false
        };
        const expectedState = {
            data: { catalogue: { items: [] }, categories: [], slides: [] },
            isLoading: false,
            hasError: true
        };

        expect(reducer(state, action)).toEqual(expectedState);
    });
});
