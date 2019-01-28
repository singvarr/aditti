import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./Autosuggest.less";

class Autosuggest extends Component {
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

Autosuggest.propTypes = {
    className: PropTypes.string
};

Autosuggest.defaultProps = {
    className: null
};

export default Autosuggest;
