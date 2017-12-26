import React, {Component} from "react";

import Carousel from "nuka-carousel";
import Slide from "./slide.jsx";

class CarouselWrapper extends Component {
    render() {
        return (
            <section className="carousel">
                <Carousel
                    ref="carousel"
                    width={1024}
                    slides={this.props.slides}
                    style={{margin: '0 auto'}}
                    autoplay={true}
                    wrapAround={true}
                    decorators={[{
                        component: () => {
                            return (
                                <div>{
                                    this.props.slides.map((slide, index) => {
                                        return <div key={index}
                                            onClick={() => this.refs.carousel.goToSlide(index)}
                                            className="pointer"
                                            />
                                    })
                                }</div>
                            )
                        },
                        position: 'BottomCenter',
                        style: {bottom: 30}
                    }]}
                >
                    {this.props.slides.map((slide, index) => {
                        return <Slide 
                            key={index}
                            heading={slide.heading}
                            description={slide.description}
                            image={slide.imgSrc}
                        />
                    })}
                </Carousel>
            </section>  
        )
    }
}

export default CarouselWrapper;