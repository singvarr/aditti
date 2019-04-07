import React from "react";
import { shallow } from "enzyme";
import { CartTotal } from "../CartTotal";

describe("<CartTotal />", () => {
    it("renders without crash", () => {
        const tree = shallow(<CartTotal totalPrice={1000} totalQuantity={3} />);

        expect(tree).toMatchSnapshot();
    });
});
