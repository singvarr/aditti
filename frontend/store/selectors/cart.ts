import { createSelector } from "reselect";
import { State } from "types/index";

const productsSelector = (state: State) => state.products;
const cartSelector = (state: State) => state.cart;

export const getCartTotalPrice = createSelector(
    [productsSelector, cartSelector],
    (products, cart) => {
        return cart.reduce((initialValue, itemQuantity, itemId) => {
            const item = products.data.find(item => item.id === itemId);

            return (initialValue += item.price * itemQuantity);
        }, 0);
    }
);

export const getCartTotalQuantity = createSelector([cartSelector], cart => {
    return cart.reduce((initialValue, value) => {
        return (initialValue += value);
    }, 0);
});

export const getCartItems = createSelector(
    [productsSelector, cartSelector],
    (products, cart) => {
        return products.data.reduce((initialValue, item) => {
            if (cart.has(item.id)) {
                const itemQuantity = cart.get(item.id);
                const itemWithPrice = Object.assign({}, item, {
                    quantity: itemQuantity
                });

                initialValue.push(itemWithPrice);
            }

            return initialValue;
        }, []);
    }
);
