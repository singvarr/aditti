import React, { Fragment } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "components/Header";
import Menu from "components/Menu";
import Footer from "components/Footer";
import CatalogueRoute from "routes/CatalogueRoute";
import CartRoute from "routes/CartRoute";
import SignUpRoute from "routes/SignUpRoute";
import SignInRoute from "routes/SignInRoute";

import store from "store";

import "assets/fonts/index.css";
import "assets/icons/flaticon.css";
import "vendor/reset.css";
import "less/index.less";

import menu from "fixtures/menu";
import footerLinks from "fixtures/footerLinks";

function renderApp() {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Fragment>
                    <Header />
                    <Menu menu={menu} />
                    <main>
                        <Switch>
                            <Route component={CatalogueRoute} exact path="/" />
                            <Route component={CartRoute} exact path="/cart" />
                            <Route
                                component={SignUpRoute}
                                exact
                                path="/signup"
                            />
                            <Route
                                component={SignInRoute}
                                exact
                                path="/signin"
                            />
                        </Switch>
                    </main>
                    <Footer linksList={footerLinks} />
                </Fragment>
            </BrowserRouter>
        </Provider>,
        document.getElementById("root")
    );
}

renderApp();

if (module.hot) {
    module.hot.accept(() => renderApp());
}
