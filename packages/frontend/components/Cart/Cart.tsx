import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import {
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
    removeItem
} from "actions/cart";
import { getCartTotalPrice, getCartItems } from "selectors/cart";

import State from "types/state";
import { CartProductType } from "@aditti/types";

type Props = {
    cartItems: Array<CartProductType>;
    onClearCart: () => void;
    onDecreaseQuantity: (id: string) => void;
    onIncreaseQuantity: (id: string) => void;
    onRemoveItem: (id: string) => void;
    totalPrice: number;
};

export function Cart(props: Props) {
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
                                <img alt={item.name} src={item.src} />
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
                <span>{`Your total sum is ${props.totalPrice}`}</span>
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

function mapStateToProps(state: State) {
    return {
        totalPrice: getCartTotalPrice(state),
        cartItems: getCartItems(state)
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onIncreaseQuantity: (id: string) => dispatch(increaseItemQuantity(id)),
        onDecreaseQuantity: (id: string) => dispatch(decreaseItemQuantity(id)),
        onRemoveItem: (id: string) => dispatch(removeItem(id)),
        onClearCart: () => dispatch(clearCart())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
