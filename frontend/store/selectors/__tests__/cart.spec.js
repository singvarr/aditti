import { Map } from "immutable";
import {
    getCartTotalPrice,
    getCartTotalQuantity,
    getCartItems
} from "selectors/cart";

describe("cart selectors", () => {
    const products = [
        {
            id: "1",
            name: "branded shoes",
            price: 200,
            category: "shoes",
            src: "./assets/img/items/shoes.png"
        },
        {
            id: "2",
            name: "levis tshort",
            price: 300,
            category: "tshirts",
            src: "./assets/img/items/t-short_levis.png"
        },
        {
            id: "3",
            name: "gray tshort",
            price: 350,
            category: "tshirts",
            src: "./assets/img/items/t-shirt_gray.png"
        },
        {
            id: "4",
            name: "purse",
            price: 250,
            category: "accesories",
            src: "./assets/img/items/purse.png"
        }
    ];
    const cart = Map({ 1: 1, 2: 5, 3: 10 });
    const state = {
        cart,
        products: {
            data: products,
            isLoading: false,
            hasError: false
        }
    };

    it("getCartTotalPrice: should calculate total price of cart", () => {
        const expectedResult = 1 * 200 + 5 * 300 + 10 * 350;

        expect(getCartTotalPrice(state)).toEqual(expectedResult);
    });

    it("getCartTotalQuantity: should calculate total quantity of cart items",
        () => {
            const expectedResult = 1 + 5 + 10;

            expect(getCartTotalQuantity(state)).toEqual(expectedResult);
        }
    );

    it("getCartItems: should prepare data about items in cart", () => {
        const expectedResult = [
            {
                id: "1",
                name: "branded shoes",
                price: 200,
                category: "shoes",
                src: "./assets/img/items/shoes.png",
                quantity: 1
            },
            {
                id: "2",
                name: "levis tshort",
                price: 300,
                category: "tshirts",
                src: "./assets/img/items/t-short_levis.png",
                quantity: 5
            },
            {
                id: "3",
                name: "gray tshort",
                price: 350,
                category: "tshirts",
                src: "./assets/img/items/t-shirt_gray.png",
                quantity: 10
            }
        ];

        expect(getCartItems(state)).toEqual(expectedResult);
    });
});
