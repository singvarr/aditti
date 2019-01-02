import React from "react";
import { shallow } from "enzyme";
import FetchStatus from "../FetchStatus";

describe("<FetchStatus />", () => {
    it("renders without crash", () => {
        const tree = shallow(
            <FetchStatus isLoading={false} hasError={false} />
        );

        expect(tree).toMatchSnapshot();
    });

    it("renders <LoadingMessage /> if has loading status", () => {
        const component = shallow(<FetchStatus hasError={false} isLoading />);

        expect(component.find("LoadingMessage")).toHaveLength(1);
    });

    it("renders <ErrorMessage /> if has  status", () => {
        const component = shallow(<FetchStatus hasError isLoading={false} />);

        expect(component.find("ErrorMessage")).toHaveLength(1);
    });

    it("nothing renders if both props are falsy", () => {
        const component = shallow(
            <FetchStatus hasError={false} isLoading={false} />
        );

        expect(component.type()).toEqual(null);
    });
});
