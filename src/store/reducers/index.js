import { combineReducers } from "redux";

import catalogue from "reducers/catalogue";
import cart from "reducers/cart";
import category from "reducers/filter";

const reducer = combineReducers({
    catalogue,
    cart,
    category
});

export default reducer;
