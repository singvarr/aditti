import thunk, { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import configureMockStore, { MockStoreCreator } from "redux-mock-store";
import fetchMock from "fetch-mock";

import getCarousel, {
    carouselEndpoint,
    headers,
    getCarouselLoading,
    getCarouselSuccess,
    getCarouselError
} from "actions/carousel";
import { MockStoreCreatorType } from "store/state";
import FeaturedProductType from "@aditti/types/carousel";

const middlewares = [thunk];
const mockStore: MockStoreCreatorType = configureMockStore(middlewares);
const store = mockStore();

describe("getCarousel: test fetch carousel", () => {
    afterEach(() => fetchMock.restore());

    it("passes data on success fetch", () => {
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

        fetchMock.getOnce(carouselEndpoint, { body: payload, headers });

        const expectedActions = [
            getCarouselLoading(),
            getCarouselSuccess(payload)
        ];

        return store.dispatch(getCarousel()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("passes error on failed fetch", () => {
        const errorStatus = 404;

        fetchMock.getOnce(carouselEndpoint, errorStatus);

        const expectedActions = [getCarouselLoading(), getCarouselError()];

        return store.dispatch(getCarousel()).catch(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
