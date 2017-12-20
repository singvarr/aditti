import React, {Component} from "react";

import BucketContainer from "./containers/BucketContainer";
import CategoriesContainer from './containers/CategoriesContainer';
import GalleryContainer from "./containers/GalleryContainer";

import links from './store/links.json';
import slides from './store/slides.json';

import Menu from "./components/menu.jsx";
import CarouselWrapper from './components/carousel.jsx';
import Footer from "./components/footer.jsx";

class App extends Component {
	render() {
		return [
				<header key='header'>
					<div className="wrapper">
						<BucketContainer/>
					</div>
					<Menu menu={links.mainMenu}/>
				</header>,
				<main key='main'>
					<CarouselWrapper slides={slides}/>
					<CategoriesContainer/>
					<GalleryContainer/>
				</main>,
				<Footer
					key='footer'
					linksList={links.footerLinks}
				/>
		]
	}
}

export default App;