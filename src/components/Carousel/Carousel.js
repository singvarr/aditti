import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import Slide from "components/Slide";
import "./Carousel.less";

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.carousel = React.createRef();
    }

    componentDidMount() {
        new Swiper(this.carousel.current, {
            pagination: {
                el: ".swiper-pagination"
            }
        });
    }

    render() {
        return (
            <section className="carousel">
                <div className="swiper-container" ref={this.carousel}>
                    <div className="swiper-wrapper">
                        {this.props.slides.map(slide => {
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
        );
    }
}

function mapStateToProps(state) {
    return {
        slides: state.catalogue.data.slides
    };
}

Carousel.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            heading: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            imgSrc: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default connect(mapStateToProps)(Carousel);
