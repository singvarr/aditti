import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "./Categories.less";

class Categories extends Component {
    constructor(props) {
        super(props);

        this.categories = React.createRef();
        this.slidesPerView = 3;
    }

    componentDidMount() {
        new Swiper(this.categories.current, {
            slidesPerView: this.slidesPerView
        });
    }

    render() {
        return (
            <section
                className="wrapper swiper-container"
                ref={this.categories}
            >
                <div className="swiper-wrapper">
                    {this.props.categories.map(category => {
                        return (
                            <div
                                className="swiper-slide category"
                                key={category.name}
                            >
                                <div className="category__img-container">
                                    <img
                                        className="category__img"
                                        src={category.src}
                                        alt={category.name}
                                    />
                                </div>
                                <div className="category__info">
                                    <div className="category__name">
                                        {category.name}
                                    </div>
                                    <button
                                        className="category__btn"
                                        name="shop"
                                        type="button"
                                    >
                                        Buy
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
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
