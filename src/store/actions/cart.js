import {
    REMOVE_ITEM,
    INCREASE_ITEM_QUANTITY,
    DECREASE_ITEM_QUANTITY,
    CLEAR_CART
} from "constants/cart";

export function removeItem(name) {
    return {
        type: REMOVE_ITEM,
        name
    };
}

export function increaseItemQuantity(name) {
    return {
        type: INCREASE_ITEM_QUANTITY,
        name
    };
}

export function decreaseItemQuantity(name) {
    return {
        type: DECREASE_ITEM_QUANTITY,
        name
    };
}

export function clearCart() {
    return {
        type: CLEAR_CART
    };
}
