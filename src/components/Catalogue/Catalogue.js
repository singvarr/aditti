import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Product from "components/Product";
import "./Catalogue.less";

function Catalogue(props) {
    return (
        <section className="catalogue">
            <div className="catalogue__title-wrapper">
                <h2 className="catalogue__title">featured items</h2>
            </div>
            <div className="catalogue__products">
                {props.items.map(item => {
                    return (
                        <Product
                            key={item.id}
                            className="catalogue__product"
                            data={item}
                        />
                    );
                })}
            </div>
        </section>
    );
}

function mapStateToProps(state) {
    return {
        items: state.catalogue.data.catalogue.items
    };
}

Catalogue.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            category: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired
        })
    ).isRequired
};

export default connect(mapStateToProps)(Catalogue);
