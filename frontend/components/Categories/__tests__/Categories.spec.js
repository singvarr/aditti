import React from "react";
import { shallow } from "enzyme";
import { Categories } from "../Categories";
import FetchStatus from "components/FetchStatus";
import CategoriesCarousel from "components/CategoriesCarousel";

describe("<Categories />", () => {
    const onGetCategories = jest.fn();

    afterEach(() => jest.clearAllMocks());

    it("renders without crash", () => {
        const tree = shallow(
            <Categories
                categories={[]}
                hasError={false}
                isLoading={false}
                onGetCategories={onGetCategories}
            />
        );

        expect(tree).toMatchSnapshot();
    });

    it("starts fetch of categories in componentDidMount", () => {
        shallow(
            <Categories
                categories={[]}
                hasError={false}
                isLoading={false}
                onGetCategories={onGetCategories}
            />
        );

        expect(onGetCategories).toHaveBeenCalledTimes(1);
    });

    it("renders FetchLoading during categories loading", () => {
        const component = shallow(
            <Categories
                categories={[]}
                hasError={false}
                isLoading
                onGetCategories={onGetCategories}
            />
        );

        expect(component.type()).toEqual(FetchStatus);
    });

    it("renders FetchLoading if fetch was unsuccessful", () => {
        const component = shallow(
            <Categories
                categories={[]}
                hasError
                isLoading={false}
                onGetCategories={onGetCategories}
            />
        );

        expect(component.type()).toEqual(FetchStatus);
    });

    it(
        "renders CategoriesCarousel with categories list if fetch was finished",
        () => {
            const categories = [];
            const component = shallow(
                <Categories
                    categories={categories}
                    hasError={false}
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
        }
    );
});
