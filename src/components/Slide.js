import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

function Slide(props) {
    return (
        <div className={classnames("slide", props.className)}>
            <div className="slide-img">
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
    className: PropTypes.string,
    description: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

Slide.defaultProps = {
    className: null
};

export default Slide;
