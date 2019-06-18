import React from "react";
import LoadingMessage from "components/LoadingMessage";
import ErrorMessage from "components/ErrorMessage";
import { FetchState } from "store/state";

function FetchStatus(props: FetchState) {
    if (props.isLoading) {
        return <LoadingMessage />;
    } else if (props.isError) {
        return <ErrorMessage />;
    }

    return null;
}

export default FetchStatus;
