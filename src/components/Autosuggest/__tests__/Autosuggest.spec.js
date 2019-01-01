import React from "react";
import { shallow } from "enzyme";
import Autosuggest from "components/Autosuggest";

describe("<Autosuggest />", () => {
    it("renders without crash", () => {
        const tree = shallow(<Autosuggest />);

        expect(tree).toMatchSnapshot();
    });

    it("has .autosuggest wrapper class", () => {
        const component = shallow(<Autosuggest />);

        expect(component.find(".autosuggest")).toHaveLength(1);
    });

    it("receives extra class for wrapper from props", () => {
        const className = "autosuggest-wrapper";
        const component = shallow(<Autosuggest className={className} />);

        expect(component.find(`.${className}`)).toHaveLength(1);
    });
});
