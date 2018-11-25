import { combineReducers } from "redux";

import catalogue from "reducers/catalogue";
import cart from "reducers/cart";

const reducer = combineReducers({
    catalogue,
    cart
});

export default reducer;
