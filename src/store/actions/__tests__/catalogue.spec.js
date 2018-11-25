import { apiMiddleware } from "redux-api-middleware";
import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";

import fetchCatalogue, { catalogueEndpoint, headers } from "actions/catalogue";
import {
    FETCH_CATALOGUE_LOADING,
    FETCH_CATALOGUE_SUCCESS,
    FETCH_CATALOGUE_ERROR
} from "constants/catalogue";

const middlewares = [apiMiddleware];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe("fetchCatalogue: test fetch catalogue", () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it(`fires ${FETCH_CATALOGUE_SUCCESS} on success fetch`, () => {
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

        fetchMock.getOnce(catalogueEndpoint, { body: payload, headers });

        const expectedActions = [
            { type: FETCH_CATALOGUE_LOADING },
            { type: FETCH_CATALOGUE_SUCCESS, payload }
        ];

        return store.dispatch(fetchCatalogue()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it(`fires ${FETCH_CATALOGUE_ERROR} on error`, () => {
        const errorStatus = 404;

        fetchMock.getOnce(catalogueEndpoint, errorStatus);

        const expectedActions = [
            { type: FETCH_CATALOGUE_LOADING },
            { type: FETCH_CATALOGUE_ERROR }
        ];

        return store.dispatch(fetchCatalogue()).catch(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
