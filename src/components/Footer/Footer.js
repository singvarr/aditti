import React from "react";
import PropTypes from "prop-types";
import "./Footer.less";

function Footer(props) {
    return (
        <footer className="footer">
            {props.linksList.length && (
                <div className="footer__links-wrapper wrapper">
                    {props.linksList.map(linksList => {
                        return (
                            <div className="footer__links" key={linksList.name}>
                                <div className="footer__links-title">
                                    {linksList.name}
                                </div>
                                <ul className="footer__links-list">
                                    {linksList.links.map(item => {
                                        return (
                                            <li key={item.name}>
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
            )}
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
