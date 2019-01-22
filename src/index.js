import React, { Fragment } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "components/Header";
import Menu from "components/Menu";
import Footer from "components/Footer";
import CatalogueRoute from "routes/CatalogueRoute";
import CartRoute from "routes/CartRoute";

import store from "store";

import "assets/fonts/index.css";
import "assets/icons/flaticon.css";
import "vendor/reset.css";
import "less/index.less";

import links from "store/links";
import SignUpRoute from "./routes/SignUpRoute";

render(
    <Provider store={store}>
        <BrowserRouter>
            <Fragment>
                <Header />
                <Menu menu={links.mainMenu} />
                <main>
                    <Switch>
                        <Route component={CatalogueRoute} exact path="/" />
                        <Route component={CartRoute} path="/cart" />
                        <Route component={SignUpRoute} path="/signup" />
                    </Switch>
                </main>
                <Footer linksList={links.footerLinks} />
            </Fragment>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
