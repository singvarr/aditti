import React from "react";
import PropTypes from "prop-types";
import "./Footer.less";

function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer__links-wrapper">
                {props.linksList.map((obj, index) => {
                    return (
                        <div className="footer__links" key={index}>
                            <div className="footer__links-title">
                                {obj.name}
                            </div>
                            <ul className="footer__links-list">
                                {obj.links.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a
                                                className="footer__link"
                                                href={item.href}
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
            <div className="footer__copyright">Copyright 2013 CSS Author</div>
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
