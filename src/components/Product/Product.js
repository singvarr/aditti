import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import classnames from "classnames";
import { increaseItemQuantity } from "actions/cart";
import "./Product.less";

function Product(props) {
    return (
        <div className={classnames("product", props.className)}>
            <div className="product__img-container">
                <img
                    className="product__img"
                    src={props.data.src}
                    alt={props.data.name}
                />
            </div>
            <div className="product__data">
                <div className="product__name">{props.data.name}</div>
                <div className="product__details">
                    <div className="product__price">$ {props.data.price}</div>
                    <button
                        className="product__buy-btn"
                        type="button"
                        onClick={() => props.onAdd(props.data.id)}
                    >
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
}

Product.propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired
    }).isRequired,
    onAdd: PropTypes.func.isRequired
};

Product.defaultProps = {
    className: null
};

function mapDispatchToProps(dispatch) {
    return {
        onAdd: id => dispatch(increaseItemQuantity(id))
    };
}

export default connect(
    null,
    mapDispatchToProps
)(Product);
