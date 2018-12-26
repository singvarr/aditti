import { combineReducers } from "redux";

import carousel from "reducers/carousel";
import cart from "reducers/cart";
import categories from "reducers/categories";
import products from "reducers/products";

const reducer = combineReducers({
    carousel,
    cart,
    categories,
    products
});

export default reducer;
