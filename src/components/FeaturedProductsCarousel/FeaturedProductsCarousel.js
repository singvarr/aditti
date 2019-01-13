import React, { Component } from "react";
import PropTypes from "prop-types";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import Slide from "components/Slide";
import classnames from "classnames";
import "./FeaturedProductsCarousel.less";

class FeaturedProductsCarousel extends Component {
    constructor(props) {
        super(props);

        this.carousel = React.createRef();
        this.bullets = React.createRef();
    }

    componentDidMount() {
        new Swiper(this.carousel.current, {
            pagination: {
                clickable: true,
                el: this.bullets.current
            }
        });
    }

    render() {
        return this.props.slides.length ? (
            <div
                className={classnames("swiper-container", this.props.className)}
                ref={this.carousel}
            >
                <div className="swiper-wrapper">
                    {this.props.slides.map(slide => {
                        return (
                            <Slide
                                className="swiper-slide"
                                key={slide.heading}
                                slide={slide}
                            />
                        );
                    })}
                </div>
                <div className="swiper-pagination" ref={this.bullets} />
            </div>
        ) : null;
    }
}

FeaturedProductsCarousel.propTypes = {
    className: PropTypes.string,
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            heading: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            imgSrc: PropTypes.string.isRequired
        })
    ).isRequired
};

FeaturedProductsCarousel.defaultProps = {
    className: null
};

export default FeaturedProductsCarousel;
