import React from "react";
import { shallow } from "enzyme";
import { Product } from "../Product";

describe("<Product />", () => {
    const productId = "1";
    const onAdd = jest.fn();

    const props = {
        onAdd,
        data: {
            id: productId,
            name: "t-shirt",
            price: 500,
            category: "t-shirts",
            src: "assets/img/t-shirt.png"
        }
    };

    it("renders without crash", () => {
        const tree = shallow(<Product {...props} />);

        expect(tree).toMatchSnapshot();
    });

    it("receives className for wrapper from props", () => {
        const className = "product-wrapper";

        const component = shallow(<Product {...props} className={className} />);

        expect(component.find(".product").hasClass(className)).toBeTruthy();
    });

    it("has all elements with necessary data", () => {
        const component = shallow(<Product {...props} />);

        expect(component.find(".product")).toHaveLength(1);
        expect(component.find(".product__img")).toHaveLength(1);
        expect(component.find(".product__name")).toHaveLength(1);
        expect(component.find(".product__price")).toHaveLength(1);
        expect(component.find(".product__buy-btn")).toHaveLength(1);
    });

    it("handles addition to cart via onAdd prop", () => {
        const component = shallow(<Product {...props} />);

        component.find(".product__buy-btn").simulate("click");

        expect(onAdd).toHaveBeenCalledWith(productId);
        expect(onAdd).toHaveBeenCalledTimes(1);
    });
});
