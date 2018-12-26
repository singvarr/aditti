import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import FetchStatus from "components/FetchStatus";
import getCategories from "actions/categories";
import "./Categories.less";

class Categories extends Component {
    constructor(props) {
        super(props);

        this.categories = React.createRef();
        this.slidesPerView = 3;
    }

    componentDidMount() {
        this.props.onGetCategories();

        new Swiper(this.categories.current, {
            slidesPerView: this.slidesPerView
        });
    }

    render() {
        const { isLoading, hasError, categories } = this.props;

        if (isLoading || hasError) {
            return <FetchStatus hasError={hasError} isLoading={isLoading} />;
        }

        return (
            <section className="wrapper swiper-container" ref={this.categories}>
                <div className="swiper-wrapper">
                    {categories.length &&
                        categories.map(category => {
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
    const { data: categories, hasError, isLoading } = state.categories;

    return {
        categories,
        hasError,
        isLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetCategories: () => dispatch(getCategories())
    };
}

Categories.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired
        })
    ).isRequired,
    hasError: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onGetCategories: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);
