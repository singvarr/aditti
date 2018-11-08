import { connect } from "react-redux";
import { setCategory } from "actions";
import categories from "../store/categories.json";
import Categories from "../components/categories.jsx";

function mapStateToProps(state) {
    return {
        categories
    }
}

function mapDispatchToProps(dispatch) {
	return {
		onFilter: category => dispatch(setCategory(category))
	}
}

const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Categories);

export default CategoriesContainer;