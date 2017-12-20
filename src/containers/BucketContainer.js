import { connect } from "react-redux";
import Bucket from "../components/bucket.jsx";

function mapStateToProps(state) {
    return {
        items: state.items
    }
}

const BucketContainer = connect(mapStateToProps)(Bucket);

export default BucketContainer;