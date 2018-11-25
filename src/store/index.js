import { createStore, applyMiddleware } from "redux";
import { apiMiddleware } from "redux-api-middleware";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "reducers";
import state from "./state.json";

const developmentMode = "development";
const env = process.env.NODE_ENV || developmentMode;

const middlewares = [apiMiddleware];
const enhancer =
    env === developmentMode
        ? composeWithDevTools(applyMiddleware(...middlewares))
        : applyMiddleware(...middlewares);

const store = createStore(reducer, state, enhancer);

export default store;
