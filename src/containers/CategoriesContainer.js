import { connect } from "react-redux";
import Categories from "../components/categories.jsx";
import { setCategory } from "../actions";

function mapStateToProps(state) {
    return {
        categories: state.category
    }
}

function mapDispatchToProps(dispatch) {
	return {
		onFilter: filter => dispatch(setCategory(filter))
	}
}

const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Categories);

export default CategoriesContainer;