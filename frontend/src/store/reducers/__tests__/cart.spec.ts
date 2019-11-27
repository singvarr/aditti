import { Map } from "immutable";
import * as matchers from "jest-immutable-matchers";
import { ActionType } from "typesafe-actions";

import reducer, { defaultState } from "reducers/cart";
import * as cartActions from "actions/cart";
import {
    REMOVE_ITEM,
    INCREASE_ITEM_QUANTITY,
    DECREASE_ITEM_QUANTITY,
    CLEAR_CART
} from "constants/cart";

describe("cart reducer", () => {
    beforeEach(() => expect.extend(matchers));

    const state = Map({ item1: 1, item2: 5, item3: 10 });

    it("returns initial state by default", () => {
        // Typecheck should fail in expect call
        // @ts-ignore
        expect(reducer(undefined, { type: "" })).toEqual(defaultState);
    });

    it("should remove all items of one type", () => {
        const itemId = "item1";
        const action: ActionType<typeof cartActions.removeItem> = {
            type: REMOVE_ITEM,
            payload: { id: itemId }
        };
        const expectedState = Map({ item2: 5, item3: 10 });

        expect(reducer(state, action)).toEqual(expectedState);
    });

    it("should increment quantity of item in cart", () => {
        const itemId = "item1";
        const action: ActionType<typeof cartActions.increaseItemQuantity> = {
            type: INCREASE_ITEM_QUANTITY,
            payload: { id: itemId }
        };
        const expectedState = Map({ item1: 2, item2: 5, item3: 10 });

        expect(reducer(state, action)).toEqual(expectedState);
    });

    it("should add item of new type to cart", () => {
        const itemId = "item4";
        const action: ActionType<typeof cartActions.increaseItemQuantity> = {
            type: INCREASE_ITEM_QUANTITY,
            payload: { id: itemId }
        };
        const expectedState = Map({
            item1: 1,
            item2: 5,
            item3: 10,
            item4: 1
        });

        expect(reducer(state, action)).toEqual(expectedState);
    });

    it("should decrease quantity of item in cart", () => {
        const itemId = "item2";
        const action: ActionType<typeof cartActions.decreaseItemQuantity> = {
            type: DECREASE_ITEM_QUANTITY,
            payload: { id: itemId }
        };
        const expectedState = Map({ item1: 1, item2: 4, item3: 10 });

        expect(reducer(state, action)).toEqual(expectedState);
    });

    it("should delete single item from cart", () => {
        const itemId = "item1";
        const action: ActionType<typeof cartActions.decreaseItemQuantity> = {
            type: DECREASE_ITEM_QUANTITY,
            payload: { id: itemId }
        };
        const expectedState = Map({ item2: 5, item3: 10 });

        expect(reducer(state, action)).toEqual(expectedState);
    });

    it("should clear all items from cart", () => {
        const action: ActionType<typeof cartActions.clearCart> = {
            type: CLEAR_CART
        };
        const expectedState = Map();

        expect(reducer(state, action)).toEqual(expectedState);
    });
});
