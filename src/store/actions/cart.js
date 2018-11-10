import {
    REMOVE_ITEM,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    CLEAR_BUCKET
} from "constants/cart";

export function removeItem(name) {
    return {
        type: REMOVE_ITEM,
        name
    };
}

export function increaseQuantity(name) {
    return {
        type: INCREASE_QUANTITY,
        name
    };
}

export function decreaseQuantity(name) {
    return {
        type: DECREASE_QUANTITY,
        name
    };
}

export function clearBucket() {
    return {
        type: CLEAR_BUCKET
    };
}
