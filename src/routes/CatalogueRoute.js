import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Carousel from "components/Carousel";
import Categories from "components/Categories";
import ErrorMessage from "components/ErrorMessage";
import Catalogue from "components/Catalogue";
import Loading from "components/Loading";

import fetchCatalogue from "actions/catalogue";

class CatalogueRoute extends Component {
    componentDidMount() {
        this.props.onFetchCatalogue();
    }

    render() {
        if (this.props.isLoading) {
            return <Loading />;
        } else if (this.props.hasError) {
            return <ErrorMessage />;
        }

        return (
            <Fragment>
                <Carousel />
                <Categories />
                <Catalogue />
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.catalogue.isLoading,
        hasError: state.catalogue.hasError
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchCatalogue: () => dispatch(fetchCatalogue())
    };
}

CatalogueRoute.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired,
    onFetchCatalogue: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CatalogueRoute);
