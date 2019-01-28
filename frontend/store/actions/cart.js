import {
    REMOVE_ITEM,
    INCREASE_ITEM_QUANTITY,
    DECREASE_ITEM_QUANTITY,
    CLEAR_CART
} from "constants/cart";

export function removeItem(id) {
    return {
        type: REMOVE_ITEM,
        id
    };
}

export function increaseItemQuantity(id) {
    return {
        type: INCREASE_ITEM_QUANTITY,
        id
    };
}

export function decreaseItemQuantity(id) {
    return {
        type: DECREASE_ITEM_QUANTITY,
        id
    };
}

export function clearCart() {
    return {
        type: CLEAR_CART
    };
}
