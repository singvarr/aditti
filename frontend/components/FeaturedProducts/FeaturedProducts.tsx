import React, { Component } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

import FetchStatus from "components/FetchStatus";
import FeaturedProductsCarousel from "components/FeaturedProductsCarousel";
import getCarousel from "actions/carousel";
import { State } from "types/.";
import { FeaturedProductsState } from "types/carousel";
import "./FeaturedProducts.less";

type Props = {
    onGetCarousel: () => void;
} & FeaturedProductsState;

export class FeaturedProducts extends Component<Props> {
    componentDidMount() {
        this.props.onGetCarousel();
    }

    render() {
        const { isError, isLoading, data } = this.props;

        return isError || isLoading ? (
            <FetchStatus isError={isError} isLoading={isLoading} />
        ) : (
            <section className="featured-products">
                <FeaturedProductsCarousel
                    className="featured-products__carousel wrapper"
                    slides={data}
                />
            </section>
        );
    }
}

function mapStateToProps(state: State) {
    const { data, isError, isLoading } = state.carousel;

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
        onGetCarousel: () => dispatch(getCarousel())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeaturedProducts);
