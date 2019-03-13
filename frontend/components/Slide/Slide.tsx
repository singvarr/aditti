import React from "react";
import classnames from "classnames";
import { FeaturedProduct } from "types/carousel";
import "./Slide.less";

type Props = {
    className?: string;
    slide: FeaturedProduct;
};

function Slide(props: Props) {
    return (
        <div className={classnames("slide", props.className)}>
            <div className="slide__img-container">
                <img
                    alt={props.slide.heading}
                    className="slide__img"
                    src={props.slide.imgSrc}
                />
            </div>
            <div className="slide__info">
                <div className="slide__title">{props.slide.heading}</div>
                <div className="slide__description">
                    {props.slide.description}
                </div>
                <button className="slide__btn" name="shop-now" type="button">
                    shop now
                </button>
            </div>
        </div>
    );
}

export default Slide;
