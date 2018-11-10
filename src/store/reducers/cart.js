import { Map } from "immutable";
import {
    REMOVE_ITEM,
    INCREASE_ITEM_QUANTITY,
    DECREASE_ITEM_QUANTITY,
    CLEAR_CART
} from "constants/cart";

export const defaultState = Map();

function reducer(state = defaultState, action) {
    switch (action.type) {
    case REMOVE_ITEM:
        return state.delete(action.id);

    case INCREASE_ITEM_QUANTITY: {
        const isItemInCart = state.has(action.id);

        return isItemInCart
            ? state.update(action.id, quantity => (quantity += 1))
            : state.set(action.id, 1);
    }

    case DECREASE_ITEM_QUANTITY: {
        const itemQuantity = state.get(action.id);

        return itemQuantity > 1 ?
            state.update(action.id, quantity => (quantity -= 1)) :
            state.delete(action.id);
    }

    case CLEAR_CART:
        return state.clear();

    default:
        return state;
    }
}

export default reducer;
