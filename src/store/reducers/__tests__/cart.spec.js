import { Map } from "immutable";
import * as matchers from "jest-immutable-matchers";

import reducer, { defaultState } from "reducers/cart";
import {
    REMOVE_ITEM,
    INCREASE_ITEM_QUANTITY,
    DECREASE_ITEM_QUANTITY,
    CLEAR_CART
} from "constants/cart";

describe("cart reducer", () => {
    beforeEach(() => expect.extend(matchers));

    const state = Map({ item1: 1, item2: 5, item3: 10 });

    it("default: returns initial state", () => {
        expect(reducer(undefined, { type: "" })).toEqual(defaultState);
    });

    it(`${REMOVE_ITEM}: should remove all items of one type`, () => {
        const itemId = "item1";
        const action = {
            type: REMOVE_ITEM,
            id: itemId
        };
        const expectedState = Map({ item2: 5, item3: 10 });

        expect(reducer(state, action)).toEqual(expectedState);
    });

    it(
        `${INCREASE_ITEM_QUANTITY}: should increment quantity of item in cart`,
        () => {
            const itemId = "item1";
            const action = { type: INCREASE_ITEM_QUANTITY, id: itemId };
            const expectedState = Map({ item1: 2, item2: 5, item3: 10 });

            expect(reducer(state, action)).toEqual(expectedState);
        }
    );

    it(
        `${INCREASE_ITEM_QUANTITY}: should add item of new type to cart`,
        () => {
            const itemId = "item4";
            const action = { type: INCREASE_ITEM_QUANTITY, id: itemId };
            const expectedState = Map({
                item1: 1,
                item2: 5,
                item3: 10,
                item4: 1
            });

            expect(reducer(state, action)).toEqual(expectedState);
        }
    );

    it(
        `${DECREASE_ITEM_QUANTITY}: should decrement quantity of item in cart`,
        () => {
            const itemId = "item2";
            const action = { type: DECREASE_ITEM_QUANTITY, id: itemId };
            const expectedState = Map({ item1: 1, item2: 4, item3: 10 });

            expect(reducer(state, action)).toEqual(expectedState);
        }
    );

    it(`
        ${DECREASE_ITEM_QUANTITY}: should delete single item from cart`, () => {
        const itemId = "item1";
        const action = { type: DECREASE_ITEM_QUANTITY, id: itemId };
        const expectedState = Map({ item2: 5, item3: 10 });

        expect(reducer(state, action)).toEqual(expectedState);
    });

    it(`${CLEAR_CART}: should clear all items from cart`, () => {
        const action = { type: CLEAR_CART };
        const expectedState = Map();

        expect(reducer(state, action)).toEqual(expectedState);
    });
});
