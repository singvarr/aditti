import React from "react";
import { shallow } from "enzyme";
import { Products } from "../Products";
import FetchStatus from "components/FetchStatus";

describe("<Products />", () => {
    const onFetchProducts = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("renders without crash", () => {
        const tree = shallow(
            <Products
                isLoading={false}
                hasError={false}
                onFetchProducts={onFetchProducts}
                products={[]}
            />
        );

        expect(tree).toMatchSnapshot();
    });

    it("inits products fetch in componentDidMount", () => {
        const component = shallow(
            <Products
                isLoading={false}
                hasError={false}
                onFetchProducts={onFetchProducts}
                products={[]}
            />
        );

        component.instance().componentDidMount;

        expect(onFetchProducts).toHaveBeenCalledTimes(1);
    });

    it("renders FetchStatus during loading", () => {
        const component = shallow(
            <Products
                isLoading
                hasError={false}
                onFetchProducts={onFetchProducts}
                products={[]}
            />
        );
        expect(component.type()).toEqual(FetchStatus);
    });

    it("renders FetchStatus if fetch was unsuccessful", () => {
        const component = shallow(
            <Products
                isLoading={false}
                hasError
                onFetchProducts={onFetchProducts}
                products={[]}
            />
        );
        expect(component.type()).toEqual(FetchStatus);
    });

    it("renders products if there are products", () => {
        const products = [
            {
                id: "1",
                name: "t-shirt",
                price: 200,
                category: "t-shirts",
                src: "assets/img/t-shirts"
            }
        ];

        const component = shallow(
            <Products
                hasError={false}
                isLoading={false}
                onFetchProducts={onFetchProducts}
                products={products}
            />
        );

        expect(component.find(".catalogue__products").exists()).toBeTruthy();
        expect(component.find(".catalogue__empty").exists()).toBeFalsy();
    });

    it("renders empty block if there aren't products", () => {
        const component = shallow(
            <Products
                hasError={false}
                isLoading={false}
                onFetchProducts={onFetchProducts}
                products={[]}
            />
        );

        expect(component.find(".catalogue__products").exists()).toBeFalsy();
        expect(component.find(".catalogue__empty").exists()).toBeTruthy();
    });
});
