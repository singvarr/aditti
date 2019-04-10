import React from "react";
import { shallow } from "enzyme";
import CartRoute from "routes/CartRoute";

describe("<CartRoute />", () => {
    it("renders without crash", () => {
        const tree = shallow(<CartRoute />);

        expect(tree).toMatchSnapshot();
    });
});
