import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";

class Bucket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        const EMPTY_BUCKET = (
            <div className="dialog empty-dialog">
                <h2 className="dialog-header">Your bucket is empty</h2>
                <button onClick={() => this.handleCloseModal()}>
                    Close Modal
                </button>
            </div>
        );

        const FULL_BUCKET = (
            <div className="dialog">
                <h2 className="dialog-header">Your bucket</h2>
                <div className="dialog-main">
                    {this.props.items.map((item, index) => {
                        if (item.quantity) {
                            return (
                                <div className="item-row" key={index}>
                                    <div className="item-controls">
                                        <button
                                            className="flaticon-cancel"
                                            onClick={() =>
                                                this.props.onRemoveItem(
                                                    item.name
                                                )
                                            }
                                        />
                                        <button
                                            className="flaticon-minus"
                                            onClick={() =>
                                                this.props.onDecreaseQuantity(
                                                    item.name
                                                )
                                            }
                                        />
                                        <img src={item.src} alt={item.name} />
                                        <button
                                            className="flaticon-plus"
                                            onClick={() =>
                                                this.props.onIncreaseQuantity(
                                                    item.name
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="item-name">{item.name}</div>
                                    <div className="item-total">
                                        <span>{item.quantity}</span>
                                        <span>* {item.price}</span>
                                        <span>
                                            {" "}
                                            = {item.quantity * item.price}
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
                    <button onClick={() => this.handleCloseModal()}>
                        Close Modal
                    </button>
                </div>
            </div>
        );

        return (
            <div className="bucket">
                <button
                    id="open-bucket"
                    onClick={() => this.handleOpenModal()}
                />
                <div className="total-sum">
                    {`$ ${this.props.totalPrice}`}
                    <span className="total-quantity">
                        {this.props.totalQuantity}
                    </span>
                </div>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Bucket Modal"
                >
                    {this.props.totalQuantity ? FULL_BUCKET : EMPTY_BUCKET}
                </ReactModal>
            </div>
        );
    }
}

Bucket.propTypes = {
    totalPrice: PropTypes.number.isRequired,
    totalQuantity: PropTypes.number.isRequired,
    onIncreaseQuantity: PropTypes.func.isRequired,
    onDecreaseQuantity: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
    onClearBucket: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            category: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Bucket;
