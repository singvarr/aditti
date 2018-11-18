import React, { Component, Fragment } from "react";

import CarouselWrapper from "components/carousel";
import CategoriesContainer from "containers/CategoriesContainer";
import GalleryContainer from "containers/GalleryContainer";

import slides from "store/slides";

class CatalogueRoute extends Component {
    render() {
        return (
            <Fragment>
                <CarouselWrapper slides={slides} />
                <CategoriesContainer />
                <GalleryContainer />
            </Fragment>
        );
    }
}

export default CatalogueRoute;
