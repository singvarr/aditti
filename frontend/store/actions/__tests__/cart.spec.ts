import {
    REMOVE_ITEM,
    INCREASE_ITEM_QUANTITY,
    DECREASE_ITEM_QUANTITY,
    CLEAR_CART
} from "constants/cart";
import {
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart
} from "actions/cart";

describe("cart actions", () => {
    const id = "1";

    it("should delete cart item", () => {
        const expectedAction = { type: REMOVE_ITEM, payload: { id } };

        expect(removeItem(id)).toEqual(expectedAction);
    });

    it("should increase quantity of item in cart", () => {
        const expectedAction = {
            type: INCREASE_ITEM_QUANTITY,
            payload: { id }
        };

        expect(increaseItemQuantity(id)).toEqual(expectedAction);
    });

    it("should decrease quantity of item in cart", () => {
        const expectedAction = {
            type: DECREASE_ITEM_QUANTITY,
            payload: { id }
        };

        expect(decreaseItemQuantity(id)).toEqual(expectedAction);
    });

    it("should clear cart", () => {
        const expectedAction = { type: CLEAR_CART };

        expect(clearCart()).toEqual(expectedAction);
    });
});
