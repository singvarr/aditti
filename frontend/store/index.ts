import { createStore, applyMiddleware, Middleware } from "redux";
import { apiMiddleware } from "redux-api-middleware";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "reducers/index";

const developmentMode = "development";
const env = process.env.NODE_ENV || developmentMode;

const middlewares: Array<Middleware> = [apiMiddleware];
const enhancer =
    env === developmentMode
        ? composeWithDevTools(applyMiddleware(...middlewares))
        : applyMiddleware(...middlewares);

const store = createStore(reducer, enhancer);

export default store;
