import React, { Fragment } from "react";

import Carousel from "components/Carousel";
import Categories from "components/Categories";
import Products from "components/Products";

function CatalogueRoute() {
    return (
        <Fragment>
            <Carousel />
            <Categories />
            <Products />
        </Fragment>
    );
}

export default CatalogueRoute;
