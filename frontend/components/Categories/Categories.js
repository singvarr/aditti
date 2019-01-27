import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FetchStatus from "components/FetchStatus";
import CategoriesCarousel from "components/CategoriesCarousel";
import getCategories from "actions/categories";

export class Categories extends Component {
    componentDidMount() {
        this.props.onGetCategories();
    }

    render() {
        const { isLoading, hasError, categories } = this.props;

        return isLoading || hasError ? (
            <FetchStatus hasError={hasError} isLoading={isLoading} />
        ) : (
            <section className="categories wrapper">
                <CategoriesCarousel categories={categories} />
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
