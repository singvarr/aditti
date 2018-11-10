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
    const itemName = "shoes";

    it("should create action to remove all items of one type from cart", () => {
        const expectedAction = { type: REMOVE_ITEM, name: itemName };

        expect(removeItem(itemName)).toEqual(expectedAction);
    });

    it("should create action to add one item to cart", () => {
        const expectedAction = { type: INCREASE_ITEM_QUANTITY, name: itemName };

        expect(increaseItemQuantity(itemName)).toEqual(expectedAction);
    });

    it("should create action to remove one item from cart", () => {
        const expectedAction = { type: DECREASE_ITEM_QUANTITY, name: itemName };

        expect(decreaseItemQuantity(itemName)).toEqual(expectedAction);
    });

    it("should create action to delete all items from cart", () => {
        const expectedAction = { type: CLEAR_CART };

        expect(clearCart()).toEqual(expectedAction);
    });
});
