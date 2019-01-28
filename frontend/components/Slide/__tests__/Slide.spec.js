import React from "react";
import { shallow } from "enzyme";
import Slide from "../Slide";

describe("<Slide />", () => {
    const props = {
        heading: "2",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        imgSrc: "img/carousel/t-shirt.png"
    };

    it("renders without crash", () => {
        const tree = shallow(<Slide slide={props} />);

        expect(tree).toMatchSnapshot();
    });

    it("receives className for wrapper from props", () => {
        const className = "slide-wrapper";
        const component = shallow(
            <Slide className={className} slide={props} />
        );

        expect(component.find(".slide").hasClass(className)).toBeTruthy();
    });
});
