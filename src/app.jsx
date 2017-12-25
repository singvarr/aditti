import React from "react";

import Header from './components/header.jsx'
import CarouselWrapper from './components/carousel.jsx';
import CategoriesContainer from './containers/CategoriesContainer';
import GalleryContainer from "./containers/GalleryContainer";
import Footer from "./components/footer.jsx";

import links from './store/links.json';
import slides from './store/slides.json';

function App() {
	return [
		<Header key='header' links={links.mainMenu}/>,
		<main key='main'>
			<CarouselWrapper slides={slides}/>
			<CategoriesContainer/>
			<GalleryContainer/>
		</main>,
		<Footer key='footer' linksList={links.footerLinks}/>
	]
}

export default App;