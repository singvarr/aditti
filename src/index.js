import React, { Fragment } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Header from "components/header";
import CarouselWrapper from "components/carousel";
import CategoriesContainer from "containers/CategoriesContainer";
import GalleryContainer from "containers/GalleryContainer";
import Footer from "components/footer";

import store from "store";
import "less/index.less";

import links from "store/links";
import slides from "store/slides";

render(
    <Provider store={store}>
        <Fragment>
            <Header links={links.mainMenu} />
            <main>
                <CarouselWrapper slides={slides} />
                <CategoriesContainer />
                <GalleryContainer />
            </main>
            <Footer linksList={links.footerLinks} />
        </Fragment>
    </Provider>,
    document.getElementById("root")
);
