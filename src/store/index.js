import { createStore } from "redux";
import reducer from "../reducers";
import state from "./state.json";

const store = createStore(reducer, state);
store.subscribe(() => console.log(store.getState()));

export default store;