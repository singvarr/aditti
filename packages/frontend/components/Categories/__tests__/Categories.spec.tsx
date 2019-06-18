import React from "react";
import { shallow } from "enzyme";
import { Categories } from "../Categories";
import FetchStatus from "components/FetchStatus";
import CategoriesCarousel from "components/CategoriesCarousel";
import CategoryType from "@aditti/types/categories";

describe("<Categories />", () => {
    const onGetCategories = jest.fn();

    afterEach(() => jest.clearAllMocks());

    it("renders without crash", () => {
        const tree = shallow(
            <Categories
                data={[]}
                isError={false}
                isLoading={false}
                onGetCategories={onGetCategories}
            />
        );

        expect(tree).toMatchSnapshot();
    });

    it("starts fetch of categories in componentDidMount", () => {
        shallow(
            <Categories
                data={[]}
                isError={false}
                isLoading={false}
                onGetCategories={onGetCategories}
            />
        );

        expect(onGetCategories).toHaveBeenCalledTimes(1);
    });

    it("renders FetchLoading during categories loading", () => {
        const component = shallow(
            <Categories
                data={[]}
                isError={false}
                isLoading
                onGetCategories={onGetCategories}
            />
        );

        expect(component.type()).toEqual(FetchStatus);
    });

    it("renders FetchLoading if fetch was unsuccessful", () => {
        const component = shallow(
            <Categories
                data={[]}
                isError
                isLoading={false}
                onGetCategories={onGetCategories}
            />
        );

        expect(component.type()).toEqual(FetchStatus);
    });

    it("renders CategoriesCarousel when fetch was finished", () => {
        const categories: Array<CategoryType> = [];
        const component = shallow(
            <Categories
                data={categories}
                isError={false}
                isLoading={false}
                onGetCategories={onGetCategories}
            />
        );

        expect(component.find("section.categories").exists()).toBeTruthy();
        expect(
            component
                .find("section.categories")
                .contains(<CategoriesCarousel categories={categories} />)
        ).toBeTruthy();
    });
});
