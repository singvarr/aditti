import { createStore } from "redux";

import reducer from "reducers";
import state from "./state.json";

const store = createStore(reducer, state);

export default store;
