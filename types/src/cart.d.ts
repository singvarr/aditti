import ProductType from "types/products";

interface CartProductType extends ProductType {
    quantity: number;
}

export default CartProductType;
