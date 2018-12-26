import { apiMiddleware } from "redux-api-middleware";
import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";

import getProducts, { productsEndpoint, headers } from "actions/products";
import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from "constants/products";

const middlewares = [apiMiddleware];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe("getProducts: test fetch products", () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it(`fires ${GET_PRODUCTS_SUCCESS} on success fetch`, () => {
        const payload = [
            {
                id: "1",
                name: "branded shoes",
                price: 200,
                category: "shoes",
                src: "img/catalogue/shoes.png"
            },
            {
                id: "2",
                name: "levis tshort",
                price: 300,
                category: "tshirts",
                src: "img/catalogue/t-short_levis.png"
            }
        ];

        fetchMock.getOnce(productsEndpoint, { body: payload, headers });

        const expectedActions = [
            { type: GET_PRODUCTS_LOADING },
            { type: GET_PRODUCTS_SUCCESS, payload }
        ];

        return store.dispatch(getProducts()).then(() => {
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

        return store.dispatch(getProducts()).catch(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
