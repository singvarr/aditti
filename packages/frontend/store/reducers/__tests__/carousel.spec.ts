import { ActionType } from "typesafe-actions";
import {
    GET_CAROUSEL_LOADING,
    GET_CAROUSEL_SUCCESS,
    GET_CAROUSEL_ERROR
} from "constants/carousel";
import reducer, { initialState } from "reducers/carousel";
import { getCarouselActions } from "actions/carousel";
import { FeaturedProductsState } from "types/state";
import FeaturedProductType from "types/carousel";

describe("carousel reducer", () => {
    it("returns initial state by default", () => {
        // Typecheck should fail in expect call
        // @ts-ignore
        expect(reducer(undefined, { type: "" })).toEqual(initialState);
    });

    it("sets loading status on start of fetch", () => {
        const action: ActionType<
            typeof getCarouselActions.getCarouselLoading
        > = {
            type: GET_CAROUSEL_LOADING
        };
        const state: FeaturedProductsState = {
            data: [],
            isLoading: false,
            isError: false
        };
        const expectedState: FeaturedProductsState = {
            data: [],
            isLoading: true,
            isError: false
        };

        expect(reducer(state, action)).toEqual(expectedState);
    });

    it("unsets loading status and passes data on successful fetch", () => {
        const payload: Array<FeaturedProductType> = [
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

        const action: ActionType<
            typeof getCarouselActions.getCarouselSuccess
        > = {
            type: GET_CAROUSEL_SUCCESS,
            payload: { products: payload }
        };
        const state: FeaturedProductsState = {
            data: [],
            isLoading: true,
            isError: false
        };
        const expectedState: FeaturedProductsState = {
            data: action.payload.products,
            isLoading: false,
            isError: false
        };

        expect(reducer(state, action)).toEqual(expectedState);
    });

    it("sets error status and unsets loading on failed fetch", () => {
        const action: ActionType<typeof getCarouselActions.getCarouselError> = {
            type: GET_CAROUSEL_ERROR
        };
        const state: FeaturedProductsState = {
            data: [],
            isLoading: true,
            isError: false
        };
        const expectedState: FeaturedProductsState = {
            data: [],
            isLoading: false,
            isError: true
        };

        expect(reducer(state, action)).toEqual(expectedState);
    });
});
