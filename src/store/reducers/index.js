import { combineReducers } from "redux";

import items from "reducers/cart";
import category from "reducers/filter";

const reducer = combineReducers({
    items,
    category
});

export default reducer;
