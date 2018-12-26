import { apiMiddleware } from "redux-api-middleware";
import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";

import fetchCatalogue, { productsEndpoint, headers } from "actions/products";
import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from "constants/products";

const middlewares = [apiMiddleware];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe("fetchCatalogue: test fetch catalogue", () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it(`fires ${GET_PRODUCTS_SUCCESS} on success fetch`, () => {
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

        fetchMock.getOnce(productsEndpoint, { body: payload, headers });

        const expectedActions = [
            { type: GET_PRODUCTS_LOADING },
            { type: GET_PRODUCTS_SUCCESS, payload }
        ];

        return store.dispatch(fetchCatalogue()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it(`fires ${GET_PRODUCTS_ERROR} on error`, () => {
        const errorStatus = 404;

        fetchMock.getOnce(productsEndpoint, errorStatus);

        const expectedActions = [
            { type: GET_PRODUCTS_LOADING },
            { type: GET_PRODUCTS_ERROR }
        ];

        return store.dispatch(fetchCatalogue()).catch(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
