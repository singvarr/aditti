import React from "react";
import { shallow } from "enzyme";
import FeaturedProductsCarousel from "components/FeaturedProductsCarousel";

describe("<FeaturedProductsCarousel />", () => {
    const slides = [
        {
            heading: "Cowhide Standard Crew",
            description: "White coloured, short-sleeved, printed T-shirt.",
            imgSrc: "img/carousel/t-shirt.png"
        }
    ];

    it("renders without crash", () => {
        const tree = shallow(<FeaturedProductsCarousel slides={slides} />);

        expect(tree).toMatchSnapshot();
    });

    it("receives className from props", () => {
        const className = "carousel";
        const component = shallow(
            <FeaturedProductsCarousel className={className} slides={slides} />
        );

        expect(component.hasClass(className)).toBeTruthy();
    });

    it("renders nothing if there aren't slides", () => {
        const component = shallow(<FeaturedProductsCarousel slides={[]} />);

        expect(component.type()).toEqual(null);
    });
});
