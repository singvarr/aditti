import { connect } from "react-redux";

import { increaseItemQuantity } from "actions/cart";
import Gallery from "components/gallery";

function getCategoryItems(items, category) {
    switch (true) {
        case category == "all":
            return items;
        case category != "all":
            return items.filter(item => item.category == category);
    }
}

function mapStateToProps(state) {
    return {
        items: getCategoryItems(state.catalogue, state.category)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: id => dispatch(increaseItemQuantity(id))
    };
}

const GalleryContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery);

export default GalleryContainer;
