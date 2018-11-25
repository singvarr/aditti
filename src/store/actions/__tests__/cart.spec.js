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

    it(
        `${REMOVE_ITEM}: should create action to remove all items of one type`,
        () => {
            const expectedAction = { type: REMOVE_ITEM, id };

            expect(removeItem(id)).toEqual(expectedAction);
        }
    );

    it(
        `${INCREASE_ITEM_QUANTITY}: should create action to add item to cart`,
        () => {
            const expectedAction = { type: INCREASE_ITEM_QUANTITY, id };

            expect(increaseItemQuantity(id)).toEqual(expectedAction);
        }
    );

    it(
        `${DECREASE_ITEM_QUANTITY}: should create action to remove one item`,
        () => {
            const expectedAction = { type: DECREASE_ITEM_QUANTITY, id };

            expect(decreaseItemQuantity(id)).toEqual(expectedAction);
        }
    );

    it(
        `${CLEAR_CART}: should create action to delete all items from cart`,
        () => {
            const expectedAction = { type: CLEAR_CART };

            expect(clearCart()).toEqual(expectedAction);
        }
    );
});
