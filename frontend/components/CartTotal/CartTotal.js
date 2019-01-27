import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { getCartTotalPrice, getCartTotalQuantity } from "selectors/cart";

import "./CartTotal.less";

export function CartTotal(props) {
    return (
        <Link to="/cart">
            <div className="cart-total">
                <div className="cart-total__price">{`$ ${
                    props.totalPrice
                }`}</div>
                <div className="cart-total__quantity">
                    {props.totalQuantity}
                </div>
            </div>
        </Link>
    );
}

function mapStateToProps(state) {
    return {
        totalPrice: getCartTotalPrice(state),
        totalQuantity: getCartTotalQuantity(state)
    };
}

CartTotal.propTypes = {
    totalPrice: PropTypes.number.isRequired,
    totalQuantity: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(CartTotal);
