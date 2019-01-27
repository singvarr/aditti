import React, { Fragment } from "react";

import FeaturedProducts from "components/FeaturedProducts";
import Categories from "components/Categories";
import Products from "components/Products";

function CatalogueRoute() {
    return (
        <Fragment>
            <FeaturedProducts />
            <Categories />
            <Products />
        </Fragment>
    );
}

export default CatalogueRoute;
