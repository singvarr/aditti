import ProductType from "./products";

export interface CartProductType extends ProductType {
    quantity: number;
}
