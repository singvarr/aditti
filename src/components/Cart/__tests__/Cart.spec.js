import React from "react";
import { shallow } from "enzyme";
import { Cart } from "../Cart";

describe("<Cart />", () => {
    const onIncreaseQuantity = jest.fn();
    const onDecreaseQuantity = jest.fn();
    const onRemoveItem = jest.fn();
    const onClearCart = jest.fn();

    const props = {
        onIncreaseQuantity,
        onDecreaseQuantity,
        onRemoveItem,
        onClearCart
    };

    const productPrice = 500;
    const productId = "1";
    const productQuantity = 3;

    const cartItems = [
        {
            src: "assets/img/cart",
            price: productPrice,
            name: "t-shirt",
            category: "t-shirts",
            id: productId,
            quantity: productQuantity
        }
    ];

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("renders without crash", () => {
        const tree = shallow(<Cart {...props} cartItems={[]} totalPrice={0} />);

        expect(tree).toMatchSnapshot();
    });

    it("renders empty cart if there isn't items in it", () => {
        const component = shallow(
            <Cart {...props} cartItems={[]} totalPrice={0} />
        );

        expect(component.find(".cart").exists()).toBeFalsy();
        expect(component.find(".empty-cart")).toHaveLength(1);
    });

    it("handles clear of cart", () => {
        const component = shallow(
            <Cart {...props} cartItems={cartItems} totalPrice={productPrice} />
        );

        component.find(".cart__clear").simulate("click");

        expect(onClearCart).toHaveBeenCalledTimes(1);
    });

    it("handles add to cart", () => {
        const component = shallow(
            <Cart {...props} cartItems={cartItems} totalPrice={productPrice} />
        );

        component.find(".cart__item-increase").simulate("click");

        expect(onIncreaseQuantity).toHaveBeenCalledWith(productId);
        expect(onIncreaseQuantity).toHaveBeenCalledTimes(1);
    });

    it("handles decrease item quantity in cart", () => {
        const component = shallow(
            <Cart {...props} cartItems={cartItems} totalPrice={productPrice} />
        );

        component.find(".cart__item-decrease").simulate("click");

        expect(onDecreaseQuantity).toHaveBeenCalledWith(productId);
        expect(onDecreaseQuantity).toHaveBeenCalledTimes(1);
    });

    it("handles remove item from cart", () => {
        const component = shallow(
            <Cart {...props} cartItems={cartItems} totalPrice={productPrice} />
        );

        component.find(".cart__item-remove").simulate("click");

        expect(onRemoveItem).toHaveBeenCalledWith(productId);
        expect(onRemoveItem).toHaveBeenCalledTimes(1);
    });

    it("non-empty cart has header, footer and table with products", () => {
        const component = shallow(
            <Cart {...props} cartItems={cartItems} totalPrice={productPrice} />
        );

        expect(component.find(".cart__title")).toHaveLength(1);
        expect(component.find(".cart__items")).toHaveLength(1);
        expect(component.find(".cart__footer")).toHaveLength(1);
    });
});
