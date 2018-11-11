import { connect } from "react-redux";

import Bucket from "components/bucket";
import {
    increaseQuantity,
    decreaseQuantity,
    clearBucket,
    removeItem
} from "actions/cart";
import { getCartTotalPrice, getCartTotalQuantity } from "selectors/cart";

function mapStateToProps(state) {
    return {
        totalPrice: getCartTotalPrice(state),
        totalQuantity: getCartTotalQuantity(state),
        items: state.catalogue
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseQuantity: id => dispatch(increaseQuantity(id)),
        onDecreaseQuantity: id => dispatch(decreaseQuantity(id)),
        onRemoveItem: id => dispatch(removeItem(id)),
        onClearBucket: () => dispatch(clearBucket())
    };
}

const BucketContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Bucket);

export default BucketContainer;
