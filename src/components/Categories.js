import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

class Categories extends Component {
    constructor(props) {
        super(props);

        this.categories = React.createRef();
    }

    componentDidMount() {
        new Swiper(this.categories.current, { slidesPerView: 3 });
    }

    render() {
        return (
            <div className="categories swiper-container" ref={this.categories}>
                <div className="swiper-wrapper">
                    {this.props.categories.map(category => {
                        return (
                            <div
                                className="swiper-slide category"
                                key={category.name}
                            >
                                <div className="category-img">
                                    <img
                                        src={category.src}
                                        alt={category.name}
                                    />
                                </div>
                                <div className="category-title">
                                    <span>{category.name}</span>
                                    <button name="shop">Buy</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.catalogue.data.categories
    };
}

Categories.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired
        })
    ).isRequired
};

export default connect(mapStateToProps)(Categories);
