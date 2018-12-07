import React from "react";
import PropTypes from "prop-types";

function Footer(props) {
    return (
        <footer>
            <div className="wrapper">
                {props.linksList.map((obj, index) => {
                    return (
                        <div className="links" key={index}>
                            <h3>{obj.name}</h3>
                            <ul>
                                {obj.links.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={item.href}>{item.name}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
            <div className="copyright">
                <small>Copyright 2013 CSS Author</small>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    linksList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            links: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    href: PropTypes.string.isRequired
                }).isRequired
            ).isRequired
        }).isRequired
    )
};

export default Footer;
