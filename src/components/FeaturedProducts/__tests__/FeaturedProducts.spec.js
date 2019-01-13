import React from "react";
import { shallow } from "enzyme";
import { FeaturedProducts } from "../FeaturedProducts";
import FetchStatus from "components/FetchStatus";
import FeaturedProductsCarousel from "components/FeaturedProductsCarousel";

describe("<FeaturedProducts />", () => {
    const onGetCarousel = jest.fn();

    afterEach(() => jest.clearAllMocks());

    it("renders without crash", () => {
        const tree = shallow(
            <FeaturedProducts
                hasError={false}
                isLoading={false}
                onGetCarousel={onGetCarousel}
                slides={[]}
            />
        );

        expect(tree).toMatchSnapshot();
    });

    it("starts fetch of slides in componentDidMount", () => {
        shallow(
            <FeaturedProducts
                hasError={false}
                isLoading={false}
                onGetCarousel={onGetCarousel}
                slides={[]}
            />
        );

        expect(onGetCarousel).toHaveBeenCalledTimes(1);
    });

    it("renders FetchLoading during loading", () => {
        const component = shallow(
            <FeaturedProducts
                hasError={false}
                isLoading
                onGetCarousel={onGetCarousel}
                slides={[]}
            />
        );

        expect(component.type()).toEqual(FetchStatus);
    });

    it("renders FetchLoading if fetch ended with error", () => {
        const component = shallow(
            <FeaturedProducts
                hasError
                isLoading={false}
                onGetCarousel={onGetCarousel}
                slides={[]}
            />
        );

        expect(component.type()).toEqual(FetchStatus);
    });

    it("renders FeaturedProductsCarousel if slides were fetched", () => {
        const slides = [
            {
                heading: "Cowhide Standard Crew",
                description: "White coloured, short-sleeved, printed T-shirt.",
                imgSrc: "img/carousel/t-shirt.png"
            }
        ];

        const component = shallow(
            <FeaturedProducts
                hasError={false}
                isLoading={false}
                onGetCarousel={onGetCarousel}
                slides={slides}
            />
        );

        expect(component.hasClass("featured-products")).toBeTruthy();
        expect(component.type()).toEqual("section");
        expect(component.children().type()).toEqual(FeaturedProductsCarousel);
    });
});
