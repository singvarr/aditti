import { connect } from "react-redux";
import Bucket from "../components/bucket.jsx";
import { increaseQuantity, decreaseQuantity, clearBucket, removeItem } from "actions";

function mapStateToProps(state) {
    return {
        items: state.items
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseQuantity: name => dispatch(increaseQuantity(name)),
        onDecreaseQuantity: name => dispatch(decreaseQuantity(name)),
        onRemoveItem: name => dispatch(removeItem(name)),
        onClearBucket: () => dispatch(clearBucket())
    }    
}

const BucketContainer = connect(mapStateToProps, mapDispatchToProps)(Bucket);

export default BucketContainer;