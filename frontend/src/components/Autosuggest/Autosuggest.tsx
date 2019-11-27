import React, { Component } from "react";
import classnames from "classnames";
import "./Autosuggest.less";

type Props = {
    className?: string;
};

class Autosuggest extends Component<Props> {
    render() {
        return (
            <form className={classnames("autosuggest", this.props.className)}>
                <input
                    className="autosuggest__search"
                    name="autosuggest-search"
                />
                <button
                    className="autosuggest__submit flaticon-search"
                    type="button"
                />
            </form>
        );
    }
}

export default Autosuggest;
