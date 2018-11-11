import { createSelector } from "reselect";

const catalogueSelector = state => state.catalogue;
const cartSelector = state => state.cart;

export const getCartTotalPrice = createSelector(
    [catalogueSelector, cartSelector],
    (catalogue, cart) => {
        return cart.reduce((initialValue, itemQuantity, itemId) => {
            const item = catalogue.find(item => item.id === itemId);

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
    [catalogueSelector, cartSelector],
    (catalogue, cart) => {
        return catalogue.reduce((initialValue, item) => {
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
