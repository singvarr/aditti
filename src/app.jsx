import React from "react";

import Header from "components/header";
import CarouselWrapper from "components/carousel";
import CategoriesContainer from "containers/CategoriesContainer";
import GalleryContainer from "containers/GalleryContainer";
import Footer from "components/footer";

import links from "store/links";
import slides from "store/slides";

function App() {
    return [
        <Header key="header" links={links.mainMenu} />,
        <main key="main">
            <CarouselWrapper slides={slides} />
            <CategoriesContainer />
            <GalleryContainer />
        </main>,
        <Footer key="footer" linksList={links.footerLinks} />
    ];
}

export default App;
