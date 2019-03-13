import React, { Component, RefObject } from "react";
import classnames from "classnames";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import Slide from "components/Slide";
import { FeaturedProduct } from "types/carousel";
import "./FeaturedProductsCarousel.less";

type Props = {
    className?: string;
    slides: Array<FeaturedProduct>;
};

class FeaturedProductsCarousel extends Component<Props> {
    private carousel: RefObject<HTMLDivElement>;
    private bullets: RefObject<HTMLDivElement>;

    private constructor(props: Props) {
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

export default FeaturedProductsCarousel;
