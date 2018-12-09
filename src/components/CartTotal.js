import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { getCartTotalPrice, getCartTotalQuantity } from "selectors/cart";

function CartIcon(props) {
    return (
        <Link to="/cart">
            <div className="bucket">
                <div id="open-bucket" />
                <div className="total-sum">
                    {`$ ${props.totalPrice}`}
                    <span className="total-quantity">
                        {props.totalQuantity}
                    </span>
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

CartIcon.propTypes = {
    totalPrice: PropTypes.number.isRequired,
    totalQuantity: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(CartIcon);
