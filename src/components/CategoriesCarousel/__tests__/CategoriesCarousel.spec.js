import React from "react";
import { shallow } from "enzyme";
import CategoriesCarousel from "../CategoriesCarousel";

describe("<CategoriesCarousel />", () => {
    const categories = [
        { name: "tshirts", src: "img/categories/t-shirt.png" },
        { name: "shoes", src: "img/categories/shoes.png" },
        { name: "accesories", src: "img/categories/purse.png" }
    ];

    it("renders without crash", () => {
        const tree = shallow(<CategoriesCarousel categories={categories} />);

        expect(tree).toMatchSnapshot();
    });

    it("renders nothing if there aren't categories", () => {
        const component = shallow(<CategoriesCarousel categories={[]} />);

        expect(component.type()).toEqual(null);
    });

    it("renders carousel with categories", () => {
        const component = shallow(
            <CategoriesCarousel categories={categories} />
        );

        expect(component.type()).toEqual("div");
        expect(component.hasClass("swiper-container")).toBeTruthy();
    });
});
