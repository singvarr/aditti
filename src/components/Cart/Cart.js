import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
    removeItem
} from "actions/cart";
import { getCartTotalPrice, getCartItems } from "selectors/cart";

export function Cart(props) {
    return props.totalPrice ? (
        <div className="cart">
            <div className="cart__title">Your bucket</div>
            <div className="cart__items">
                {props.cartItems.map(item => {
                    return (
                        <div key={item.id}>
                            <div>
                                <button
                                    className="
                                            cart__item-remove
                                            flaticon-cancel
                                        "
                                    onClick={() => props.onRemoveItem(item.id)}
                                    type="button"
                                />
                                <button
                                    className="
                                            cart__item-decrease
                                            flaticon-minus
                                        "
                                    onClick={() =>
                                        props.onDecreaseQuantity(item.id)
                                    }
                                    type="button"
                                />
                                <img src={item.src} alt={item.name} />
                                <button
                                    className="
                                            cart__item-increase
                                            flaticon-plus
                                        "
                                    onClick={() =>
                                        props.onIncreaseQuantity(item.id)
                                    }
                                    type="button"
                                />
                            </div>
                            <div>{item.name}</div>
                            <div>
                                <span>{item.quantity}</span>
                                <span>* {item.price}</span>
                                <span>
                                    {` = ${item.quantity * item.price}`}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="cart__footer">
                <span>`Your total sum is ${props.totalPrice}`</span>
                <button
                    className="cart__clear"
                    onClick={props.onClearCart}
                    type="button"
                >
                    Clear bucket
                </button>
            </div>
        </div>
    ) : (
        <div className="empty-cart">
            <div className="empty-cart__title">Your bucket is empty</div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        totalPrice: getCartTotalPrice(state),
        cartItems: getCartItems(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseQuantity: id => dispatch(increaseItemQuantity(id)),
        onDecreaseQuantity: id => dispatch(decreaseItemQuantity(id)),
        onRemoveItem: id => dispatch(removeItem(id)),
        onClearCart: () => dispatch(clearCart())
    };
}

Cart.propTypes = {
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            category: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired
        })
    ).isRequired,
    onClearCart: PropTypes.func.isRequired,
    onDecreaseQuantity: PropTypes.func.isRequired,
    onIncreaseQuantity: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
    totalPrice: PropTypes.number.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
