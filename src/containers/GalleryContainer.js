import { connect } from "react-redux";
import { addItem, increaseQuantity } from "../actions";
import Gallery from "../components/gallery.jsx";

function getCategoryItems(items, category) {
	switch (true) {
		case (category == 'all'): return items;
		case (category != 'all'): return items.filter(item => item.category == category);
	}
}

function mapStateToProps(state) {
	return {
		items: getCategoryItems(state.items, state.category)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onAdd: name => dispatch(increaseQuantity(name))
	}
}

const GalleryContainer = connect(mapStateToProps, mapDispatchToProps)(Gallery);

export default GalleryContainer;