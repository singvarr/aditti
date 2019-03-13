import React from "react";
import LoadingMessage from "components/LoadingMessage";
import ErrorMessage from "components/ErrorMessage";
import { FetchStatusType } from "frontend/types";

function FetchStatus(props: FetchStatusType) {
    if (props.isLoading) {
        return <LoadingMessage />;
    } else if (props.hasError) {
        return <ErrorMessage />;
    }

    return null;
}

export default FetchStatus;
