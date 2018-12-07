import React from "react";
import PropTypes from "prop-types";

function Slide(props) {
    return (
        <div className="slide clearfix">
            <div className="slide-img ">
                <img src={props.image} alt={props.heading} />
            </div>
            <div className="slide-info">
                <h1>{props.heading}</h1>
                <p>{props.description}</p>
                <button name="shop-now">shop now</button>
            </div>
        </div>
    );
}

Slide.propTypes = {
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default Slide;
