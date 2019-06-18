import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "reducers";

const developmentMode = "development";
const env = process.env.NODE_ENV || developmentMode;

const middlewares = [thunk];
const enhancer =
    env === developmentMode
        ? composeWithDevTools(applyMiddleware(...middlewares))
        : applyMiddleware(...middlewares);

const store = createStore(reducer, enhancer);

export default store;
