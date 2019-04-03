import { ActionType, StateType } from "typesafe-actions";
import { Map } from "immutable";

import reducer from "reducers/.";
import { postAuthActions } from "actions/auth";
import { getCarouselActions } from "actions/carousel"
import { getCategoriesActions } from "actions/categories";
import { getProductsActions } from "actions/products";
import * as cart from "actions/cart";

import CategoryType from "types/categories";
import FeaturedProductType from "types/carousel";
import ProductType from "types/products";

export type FetchState = {
    readonly isError: boolean;
    readonly isLoading: boolean;
};

export type AuthAction = ActionType<typeof postAuthActions>;
export type AuthState = {
    readonly status: boolean;
} & FetchState;

export type CartAction = ActionType<typeof cart>;
export type CartState = Map<string, number>;

export type CategoriesAction = ActionType<typeof getCategoriesActions>;
export type CategoriesState = {
    readonly data: Array<CategoryType>;
} & FetchState;

export type FeaturedProductsAction = ActionType<typeof getCarouselActions>;
export type FeaturedProductsState = {
    readonly data: Array<FeaturedProductType>;
} & FetchState;

export type ProductsAction = ActionType<typeof getProductsActions>;
export type ProductsState = {
    readonly data: Array<ProductType>;
} & FetchState;

type State = StateType<typeof reducer>;

export default State;