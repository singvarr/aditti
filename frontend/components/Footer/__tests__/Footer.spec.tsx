import React from "react";
import { shallow } from "enzyme";
import Footer from "../Footer";
import FooterLinksType from "types/footer";

describe("<Footer />", () => {
    const linksList: FooterLinksType = [
        {
            name: "featured sale",
            links: [
                { name: "Alexis Hudson", href: "#" },
                { name: "American Apparel", href: "#" },
                { name: "Ben Sherman", href: "#" }
            ]
        }
    ];

    it("renders without crash", () => {
        const tree = shallow(<Footer linksList={linksList} />);

        expect(tree).toMatchSnapshot();
    });

    it("has .footer class of wrapper", () => {
        const component = shallow(<Footer linksList={linksList} />);

        expect(component.find(".footer")).toHaveLength(1);
        expect(component.find(".footer__links-wrapper")).toHaveLength(1);
        expect(component.find(".footer__copyright")).toHaveLength(1);
    });

    it("doesn't render footer links if linksList is empty", () => {
        const emptyLinksList: FooterLinksType = [];
        const linksClass = "footer__links-wrapper";
        const component = shallow(<Footer linksList={emptyLinksList} />);

        expect(component.find(linksClass)).toHaveLength(0);
    });
});
