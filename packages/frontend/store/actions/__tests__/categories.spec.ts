import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";

import getCategories, {
    categoriesEndpoint,
    headers,
    getCategoriesSuccess,
    getCategoriesLoading,
    getCategoriesError
} from "actions/categories";
import { MockStoreCreatorType } from "store/state";

const middlewares = [thunk];
const mockStore: MockStoreCreatorType = configureMockStore(middlewares);
const store = mockStore();

describe("getCategories: test fetch of categories", () => {
    afterEach(() => fetchMock.restore());

    it("passes data on successful fetch", () => {
        const payload = [
            {
                name: "tshirts",
                src: "assets/img/categories/t-shirt.png"
            }
        ];

        fetchMock.getOnce(categoriesEndpoint, { body: payload, headers });

        const expectedActions = [
            getCategoriesLoading(),
            getCategoriesSuccess(payload)
        ];

        return store.dispatch(getCategories()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("passes error on failed fetch", () => {
        const errorStatus = 404;

        fetchMock.getOnce(categoriesEndpoint, errorStatus);

        const expectedActions = [getCategoriesLoading(), getCategoriesError()];

        return store.dispatch(getCategories()).catch(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
