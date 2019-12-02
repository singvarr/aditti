import IProduct from "./products";

interface ICart extends IProduct {
    quantity: number;
}

export default ICart;
