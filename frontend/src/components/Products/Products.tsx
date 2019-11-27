import React, { Component } from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import Product from "components/Product";
import FetchStatus from "components/FetchStatus";
import getProducts from "actions/products";
import State, { ProductsState } from "types/state";
import "./Products.less";

type Props = {
    onFetchProducts: () => void;
} & ProductsState;

export class Products extends Component<Props> {
    componentDidMount() {
        this.props.onFetchProducts();
    }

    render() {
        const { isError, isLoading, data } = this.props;
        if (isLoading || isError) {
            return <FetchStatus isError={isError} isLoading={isLoading} />;
        }

        return data.length ? (
            <section className="catalogue">
                <div className="catalogue__title-wrapper">
                    <h2 className="catalogue__title wrapper">featured items</h2>
                </div>
                <div className="catalogue__products wrapper">
                    {data.map(product => {
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

function mapStateToProps(state: State) {
    const { data, isError, isLoading } = state.products;

    return {
        data,
        isError,
        isLoading
    };
}

function mapDispatchToProps(
    dispatch: ThunkDispatch<State, null, Action<string>>
) {
    return {
        onFetchProducts: () => dispatch(getProducts())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);
