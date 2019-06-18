import React from "react";
import FooterLinksType from "@aditti/types/footer";
import "./Footer.less";

export type Props = {
    linksList: FooterLinksType;
};

function Footer(props: Props) {
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

export default Footer;
