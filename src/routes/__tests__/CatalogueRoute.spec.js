import React from "react";
import { shallow } from "enzyme";
import CatalogueRoute from "routes/CatalogueRoute";

describe("<CatalogueRoute />", () => {
    it("renders without crash", () => {
        const tree = shallow(<CatalogueRoute />);

        expect(tree).toMatchSnapshot();
    });
});
