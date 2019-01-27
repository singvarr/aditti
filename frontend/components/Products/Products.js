import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Product from "components/Product";
import FetchStatus from "components/FetchStatus";
import getProducts from "actions/products";
import "./Products.less";

export class Products extends Component {
    componentDidMount() {
        this.props.onFetchProducts();
    }

    render() {
        const { hasError, isLoading, products } = this.props;
        if (isLoading || hasError) {
            return <FetchStatus hasError={hasError} isLoading={isLoading} />;
        }

        return products.length ? (
            <section className="catalogue">
                <div className="catalogue__title-wrapper">
                    <h2 className="catalogue__title wrapper">featured items</h2>
                </div>
                <div className="catalogue__products wrapper">
                    {products.map(product => {
                        return (
                            <Product
                                className="catalogue__product"
                                data={product}
                                key={product.id}
                            />
                        );
                    })}
                </div>
            </section>
        ) : (
            <div className="catalogue__empty">There are not products</div>
        );
    }
}

function mapStateToProps(state) {
    const { data: products, hasError, isLoading } = state.products;

    return {
        products,
        hasError,
        isLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchProducts: () => dispatch(getProducts())
    };
}

Products.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            category: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired
        })
    ).isRequired,
    onFetchProducts: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);
