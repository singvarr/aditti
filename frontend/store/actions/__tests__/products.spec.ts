import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";

import thunk from "redux-thunk";
import getProducts, {
    productsEndpoint,
    headers,
    getProductsLoading,
    getProductsSuccess,
    getProductsError
} from "actions/products";

import { MockStoreCreatorType } from "types/state";
import ProductType from "types/products";

const middlewares = [thunk];
const mockStore: MockStoreCreatorType = configureMockStore(middlewares);
const store = mockStore();

describe("getProducts: test fetch products", () => {
    afterEach(() => fetchMock.restore());

    it("passes data on successful fetch", () => {
        const payload: Array<ProductType> = [
            {
                id: "1",
                name: "branded shoes",
                price: 200,
                category: "shoes",
                src: "img/catalogue/shoes.png"
            }
        ];

        fetchMock.getOnce(productsEndpoint, { body: payload, headers });

        const expectedActions = [
            getProductsLoading(),
            getProductsSuccess(payload)
        ];

        return store.dispatch(getProducts()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("passes error on failed fetch", () => {
        const errorStatus = 404;

        fetchMock.getOnce(productsEndpoint, errorStatus);

        const expectedActions = [getProductsLoading(), getProductsError()];

        return store.dispatch(getProducts()).catch(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
