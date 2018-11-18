import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/footer";
import CatalogueRoute from "routes/CatalogueRoute";
import CartRoute from "routes/CartRoute";

import store from "store";
import "less/index.less";

import links from "store/links";

render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header links={links.mainMenu} />
                <main>
                    <Switch>
                        <Route exact path="/" component={CatalogueRoute} />
                        <Route path="/cart" component={CartRoute} />
                    </Switch>
                </main>
                <Footer linksList={links.footerLinks} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
