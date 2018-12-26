import { apiMiddleware } from "redux-api-middleware";
import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";

import getCategories, { categoriesEndpoint, headers } from "actions/categories";
import {
    GET_CATEGORIES_LOADING,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR
} from "constants/categories";

const middlewares = [apiMiddleware];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe("getCategories: test fetch categories", () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it(`fires ${GET_CATEGORIES_SUCCESS} on success fetch`, () => {
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

        fetchMock.getOnce(categoriesEndpoint, { body: payload, headers });

        const expectedActions = [
            { type: GET_CATEGORIES_LOADING },
            { type: GET_CATEGORIES_SUCCESS, payload }
        ];

        return store.dispatch(getCategories()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it(`fires ${GET_CATEGORIES_ERROR} on error`, () => {
        const errorStatus = 404;

        fetchMock.getOnce(categoriesEndpoint, errorStatus);

        const expectedActions = [
            { type: GET_CATEGORIES_LOADING },
            { type: GET_CATEGORIES_ERROR }
        ];

        return store.dispatch(getCategories()).catch(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
