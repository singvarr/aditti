import { connect } from "react-redux";

import Gallery from "components/gallery";

function getCategoryItems(items, category) {
    switch (true) {
    case category == "all":
        return items;
    case category != "all":
        return items.filter(item => item.category == category);
    default:
        break;
    }
}

function mapStateToProps(state) {
    return {
        items: getCategoryItems(state.catalogue, state.category)
    };
}

const GalleryContainer = connect(mapStateToProps)(Gallery);

export default GalleryContainer;
