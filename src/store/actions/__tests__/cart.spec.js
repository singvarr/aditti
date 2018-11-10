import {
    REMOVE_ITEM,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    CLEAR_BUCKET
} from "constants/cart";
import {
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clearBucket
} from "actions/cart";

describe("cart actions", () => {
    const itemName = "shoes";

    it("should create action to remove all items of one type from cart", () => {
        const expectedAction = { type: REMOVE_ITEM, name: itemName };

        expect(removeItem(itemName)).toEqual(expectedAction);
    });

    it("should create action to add one item to cart", () => {
        const expectedAction = { type: INCREASE_QUANTITY, name: itemName };

        expect(increaseQuantity(itemName)).toEqual(expectedAction);
    });

    it("should create action to remove one item from cart", () => {
        const expectedAction = { type: DECREASE_QUANTITY, name: itemName };

        expect(decreaseQuantity(itemName)).toEqual(expectedAction);
    });

    it("should create action to delete all items from cart", () => {
        const expectedAction = { type: CLEAR_BUCKET };

        expect(clearBucket()).toEqual(expectedAction);
    });
});
