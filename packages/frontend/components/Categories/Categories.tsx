import React, { Component } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

import FetchStatus from "components/FetchStatus";
import CategoriesCarousel from "components/CategoriesCarousel";
import getCategories from "actions/categories";
import State, { CategoriesState } from "store/state";

type Props = {
    onGetCategories: () => void;
} & CategoriesState;

export class Categories extends Component<Props> {
    componentDidMount() {
        this.props.onGetCategories();
    }

    render() {
        const { data, isLoading, isError } = this.props;

        return isLoading || isError ? (
            <FetchStatus isError={isError} isLoading={isLoading} />
        ) : (
            <section className="categories wrapper">
                <CategoriesCarousel categories={data} />
            </section>
        );
    }
}

function mapStateToProps(state: State) {
    const { data, isError, isLoading } = state.categories;

    return {
        data,
        isError,
        isLoading
    };
}

function mapDispatchToProps(
    dispatch: ThunkDispatch<State, null, Action<string>>
) {
    return {
        onGetCategories: () => dispatch(getCategories())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);
