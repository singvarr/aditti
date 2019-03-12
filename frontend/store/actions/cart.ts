import { action } from "typesafe-actions";
import {
    REMOVE_ITEM,
    INCREASE_ITEM_QUANTITY,
    DECREASE_ITEM_QUANTITY,
    CLEAR_CART
} from "constants/cart";

export const removeItem = (id: string) => action(REMOVE_ITEM, { id });
export const increaseItemQuantity = (id: string) => {
    return action(INCREASE_ITEM_QUANTITY, { id });
};
export const decreaseItemQuantity = (id: string) => {
    return action(DECREASE_ITEM_QUANTITY, { id });
};
export const clearCart = () => action(CLEAR_CART);
