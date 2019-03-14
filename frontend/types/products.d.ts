import { ActionType } from "typesafe-actions";
import { getProductsActions } from "actions/products";
import { FetchState } from ".";

export type ProductType = {
    category: string;
    id: string;
    name: string;
    price: number;
    src?: string;
};

export type ProductsAction = ActionType<typeof getProductsActions>;
export type ProductsState = {
    readonly data: Array<ProductType>;
} & FetchState;
