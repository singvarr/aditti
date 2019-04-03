import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import classnames from "classnames";
import { increaseItemQuantity } from "actions/cart";
import ProductType from "types/products";
import "./Product.less";

type Props = {
    className?: string;
    data: ProductType;
    onAdd: (id: string) => void;
};

export function Product(props: Props) {
    return (
        <div className={classnames("product", props.className)}>
            <div className="product__img-container">
                <img
                    alt={props.data.name}
                    className="product__img"
                    src={props.data.src}
                />
            </div>
            <div className="product__data">
                <div className="product__name">{props.data.name}</div>
                <div className="product__details">
                    <div className="product__price">$ {props.data.price}</div>
                    <button
                        className="product__buy-btn"
                        onClick={() => props.onAdd(props.data.id)}
                        type="button"
                    >
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onAdd: (id: string) => dispatch(increaseItemQuantity(id))
    };
}

export default connect(
    null,
    mapDispatchToProps
)(Product);
