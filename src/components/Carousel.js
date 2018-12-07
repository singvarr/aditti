import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CarouselWrapper from "nuka-carousel";
import Slide from "components/Slide";

class Carousel extends Component {
    render() {
        return (
            <section className="carousel">
                <CarouselWrapper
                    ref="carousel"
                    width={1024}
                    slides={this.props.slides}
                    style={{ margin: "0 auto" }}
                    autoplay={true}
                    wrapAround={true}
                    decorators={[
                        {
                            component: () => {
                                return (
                                    <div>
                                        {this.props.slides.map(
                                            (slide, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        onClick={() =>
                                                            this.refs.carousel.goToSlide(
                                                                index
                                                            )
                                                        }
                                                        className="pointer"
                                                    />
                                                );
                                            }
                                        )}
                                    </div>
                                );
                            },
                            position: "BottomCenter",
                            style: { bottom: 30 }
                        }
                    ]}
                >
                    {this.props.slides.map((slide, index) => {
                        return (
                            <Slide
                                key={index}
                                heading={slide.heading}
                                description={slide.description}
                                image={slide.imgSrc}
                            />
                        );
                    })}
                </CarouselWrapper>
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
