import React from "react";
import PropTypes from "prop-types";

import LoadingMessage from "components/LoadingMessage";
import ErrorMessage from "components/ErrorMessage";

function FetchStatus(props) {
    if (props.isLoading) {
        return <LoadingMessage />;
    } else if (props.hasError) {
        return <ErrorMessage />;
    }

    return null;
}

FetchStatus.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default FetchStatus;
