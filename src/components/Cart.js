import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
    removeItem
} from "actions/cart";
import { getCartTotalPrice, getCartItems } from "selectors/cart";

class Cart extends Component {
    render() {
        return this.props.totalPrice ? (
            <div className="dialog">
                <h2 className="dialog-header">Your bucket</h2>
                <div className="dialog-main">
                    {this.props.cartItems.map((item, index) => {
                        if (item.quantity) {
                            return (
                                <div className="item-row" key={index}>
                                    <div className="item-controls">
                                        <button
                                            className="flaticon-cancel"
                                            onClick={() =>
                                                this.props.onRemoveItem(item.id)
                                            }
                                        />
                                        <button
                                            className="flaticon-minus"
                                            onClick={() =>
                                                this.props.onDecreaseQuantity(
                                                    item.id
                                                )
                                            }
                                        />
                                        <img src={item.src} alt={item.name} />
                                        <button
                                            className="flaticon-plus"
                                            onClick={() =>
                                                this.props.onIncreaseQuantity(
                                                    item.id
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="item-name">{item.name}</div>
                                    <div className="item-total">
                                        <span>{item.quantity}</span>
                                        <span>* {item.price}</span>
                                        <span>
                                            {` = ${item.quantity * item.price}`}
                                        </span>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
                <div className="dialog-footer">
                    <span>`Your total sum is ${this.props.totalPrice}`</span>
                    <button onClick={() => this.props.onClearBucket()}>
                        Clear bucket
                    </button>
                </div>
            </div>
        ) : (
            <div className="dialog empty-dialog">
                <h2 className="dialog-header">Your bucket is empty</h2>
            </div>
        );
    }
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
    onClearBucket: PropTypes.func.isRequired,
    onDecreaseQuantity: PropTypes.func.isRequired,
    onIncreaseQuantity: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
    totalPrice: PropTypes.number.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
