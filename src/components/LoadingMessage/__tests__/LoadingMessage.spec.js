import React from "react";
import { shallow } from "enzyme";
import LoadingMessage from "../LoadingMessage";

describe("<LoadingMessage />", () => {
    it("renders without crash", () => {
        const tree = shallow(<LoadingMessage />);

        expect(tree).toMatchSnapshot();
    });
});
