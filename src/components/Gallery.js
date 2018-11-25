import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Item from "components/item";

function Gallery(props) {
    return (
        <section className="gallery">
            <h2>
                <div className="wrapper">featured items</div>
            </h2>
            <div className="items wrapper">
                {props.items.map((item, index) => {
                    return (
                        <Item
                            key={index}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            category={item.category}
                            src={item.src}
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

Gallery.propTypes = {
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

export default connect(mapStateToProps)(Gallery);
