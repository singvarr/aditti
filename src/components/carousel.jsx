import React from "react";

import Carousel from "nuka-carousel";
import Slide from "./slide.jsx";

function CarouselWrapper(props) {
    return (
        <section className="carousel">
            <Carousel slides={props.slides}>
                {
                    props.slides.map((slide, index) => {
                        return <Slide 
                            key={index}
                            heading={slide.heading}
                            description={slide.description}
                            image={slide.imgSrc}
                        />
                    })
                }
            </Carousel>
        </section>  
    )
}

export default CarouselWrapper;