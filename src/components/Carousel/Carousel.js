import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import Slide from "components/Slide";
import FetchStatus from "components/FetchStatus";
import getCarousel from "actions/carousel";
import "./Carousel.less";

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.carousel = React.createRef();
    }

    componentDidMount() {
        this.props.onGetCarousel();

        new Swiper(this.carousel.current, {
            pagination: {
                el: ".swiper-pagination"
            }
        });
    }

    render() {
        const { hasError, isLoading, slides } = this.props;

        if (hasError || isLoading) {
            return <FetchStatus hasError={hasError} isLoading={isLoading} />;
        }

        return slides.length ? (
            <section className="carousel">
                <div className="swiper-container wrapper" ref={this.carousel}>
                    <div className="swiper-wrapper">
                        {slides.map(slide => {
                            return (
                                <Slide
                                    key={slide.heading}
                                    className="swiper-slide"
                                    slide={slide}
                                />
                            );
                        })}
                    </div>
                    <div className="swiper-pagination" />
                </div>
            </section>
        ) : null;
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

Carousel.propTypes = {
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
)(Carousel);
