import { apiMiddleware } from "redux-api-middleware";
import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";

import getCarousel, { carouselEndpoint, headers } from "actions/carousel";
import {
    GET_CAROUSEL_LOADING,
    GET_CAROUSEL_SUCCESS,
    GET_CAROUSEL_ERROR
} from "constants/carousel";

const middlewares = [apiMiddleware];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe("getCarousel: test fetch carousel", () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it(`fires ${GET_CAROUSEL_SUCCESS} on success fetch`, () => {
        const payload = {
            categories: [
                {
                    name: "tshirts",
                    src: "./assets/img/categories/t-shirt.png"
                },
                {
                    name: "shoes",
                    src: "./assets/img/categories/shoes.png"
                }
            ]
        };

        fetchMock.getOnce(carouselEndpoint, { body: payload, headers });

        const expectedActions = [
            { type: GET_CAROUSEL_LOADING },
            { type: GET_CAROUSEL_SUCCESS, payload }
        ];

        return store.dispatch(getCarousel()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it(`fires ${GET_CAROUSEL_ERROR} on error`, () => {
        const errorStatus = 404;

        fetchMock.getOnce(carouselEndpoint, errorStatus);

        const expectedActions = [
            { type: GET_CAROUSEL_LOADING },
            { type: GET_CAROUSEL_ERROR }
        ];

        return store.dispatch(getCarousel()).catch(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
