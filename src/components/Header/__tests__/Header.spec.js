import React from "react";
import { shallow } from "enzyme";
import Header from "../Header";

describe("<Header />", () => {
    it("renders without crash", () => {
        const tree = shallow(<Header />);

        expect(tree).toMatchSnapshot();
    });

    it("wrapper has header tag", () => {
        const component = shallow(<Header />);

        expect(component.type()).toEqual("header");
    });

    it("has link to main page", () => {
        const component = shallow(<Header />);
        const rootLink = "/";

        expect(component.find("Link")).toHaveLength(1);
        expect(component.find("Link").prop("to")).toEqual(rootLink);
    });
});
