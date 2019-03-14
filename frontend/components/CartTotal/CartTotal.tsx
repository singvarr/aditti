import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getCartTotalPrice, getCartTotalQuantity } from "selectors/cart";
import { State } from "types/.";

import "./CartTotal.less";

type Props = {
    totalPrice: number;
    totalQuantity: number;
};

export function CartTotal(props: Props) {
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

function mapStateToProps(state: State) {
    return {
        totalPrice: getCartTotalPrice(state),
        totalQuantity: getCartTotalQuantity(state)
    };
}

export default connect(mapStateToProps)(CartTotal);
