import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { increaseItemQuantity } from "actions/cart";

function Item(props) {
    return (
        <div className="item">
            <figure>
                <img src={props.src} alt={props.name} />
            </figure>
            <figcaption>
                <span className="title">{props.name}</span>
                <span className="price">$ {props.price}</span>
                <button
                    name="buy"
                    value={props.price}
                    onClick={() => props.onAdd(props.id)}
                >
                    Buy now
                </button>
            </figcaption>
        </div>
    );
}

Item.propTypes = {
    onAdd: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        onAdd: id => dispatch(increaseItemQuantity(id))
    };
}

export default connect(null, mapDispatchToProps)(Item);
