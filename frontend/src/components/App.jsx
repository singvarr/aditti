import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "components/Header";
import Menu from "components/Menu";
import Footer from "components/Footer";
import CartRoute from "routes/CartRoute";
import CatalogueRoute from "routes/CatalogueRoute";
import SignInRoute from "routes/SignInRoute";
import SignUpRoute from "routes/SignUpRoute";

import store from "store";

import "assets/fonts/index.css";
import "assets/icons/flaticon.css";
import "vendor/reset.css";
import "less/index.less";

import menu from "fixtures/menu";
import footerLinks from "fixtures/footerLinks";
import routes from "src/constants/routes";

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Fragment>
                <Header />
                <Menu menu={menu} />
                <main>
                    <Switch>
                        <Route
                            component={CatalogueRoute}
                            exact
                            path={routes.MAIN}
                        />
                        <Route component={CartRoute} exact path={routes.CART} />
                        <Route
                            component={SignUpRoute}
                            exact
                            path={routes.SIGN_UP}
                        />
                        <Route
                            component={SignInRoute}
                            exact
                            path={routes.SIGN_IN}
                        />
                    </Switch>
                </main>
                <Footer linksList={footerLinks} />
            </Fragment>
        </BrowserRouter>
    </Provider>
);

export default App;
