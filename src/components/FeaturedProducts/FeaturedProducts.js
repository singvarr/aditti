import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FetchStatus from "components/FetchStatus";
import FeaturedProductsCarousel from "components/FeaturedProductsCarousel";
import getCarousel from "actions/carousel";
import "./FeaturedProducts.less";

export class FeaturedProducts extends Component {
    componentDidMount() {
        this.props.onGetCarousel();
    }

    render() {
        const { hasError, isLoading, slides } = this.props;

        return hasError || isLoading ? (
            <FetchStatus hasError={hasError} isLoading={isLoading} />
        ) : (
            <section className="featured-products">
                <FeaturedProductsCarousel
                    className="featured-products__carousel wrapper"
                    slides={slides}
                />
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        hasError: state.carousel.hasError,
        isLoading: state.carousel.isLoading,
        slides: state.carousel.data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetCarousel: () => dispatch(getCarousel())
    };
}

FeaturedProducts.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onGetCarousel: PropTypes.func.isRequired,
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            heading: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            imgSrc: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeaturedProducts);
