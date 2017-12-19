import { connect } from "react-redux";
import { addItem, increaseQuantity } from "../actions";
import Gallery from "../components/gallery.jsx";

function mapStateToProps(state) {
	return {
		items: state.items
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onAdd: name => dispatch(increaseQuantity(name))
	}
}

const GalleryContainer = connect(mapStateToProps, mapDispatchToProps)(Gallery);

export default GalleryContainer;