import { ActionType, StateType, getType } from "typesafe-actions";
import { Action } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Map } from "immutable";
import { MockStoreCreator } from "redux-mock-store";

import reducer from "reducers/.";
import { postAuthActions } from "actions/auth";
import {
    getCarouselSuccess,
    getCarouselError,
    getCarouselLoading
} from "actions/carousel";
import * as cart from "actions/cart";
import { getCategoriesSuccess, getCategoriesError } from "actions/categories";
import {
    getProductsSuccess,
    getProductsError,
    getProductsLoading
} from "actions/products";

import CategoryType from "types/categories";
import FeaturedProductType from "types/carousel";
import ProductType from "types/products";
import { FeaturedProducts } from "components/FeaturedProducts/FeaturedProducts";

type State = StateType<typeof reducer>;

type GetAction<Success, Error> = ThunkAction<
    Promise<ActionType<Success> | ActionType<Error>>,
    State,
    null,
    Action<string>
>;

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

export type CategoriesAction = ActionType<
    | typeof getCategoriesError
    | typeof getCarouselSuccess
    | typeof getCarouselLoading
>;
export type GetCategoriesType = GetAction<
    typeof getCategoriesSuccess,
    typeof getCategoriesError
>;
export type CategoriesState = {
    readonly data: Array<CategoryType>;
} & FetchState;

export type FeaturedProductsAction = ActionType<
    | typeof getCarouselSuccess
    | typeof getCarouselError
    | typeof getCarouselLoading
>;
export type GetFeaturedProductsType = GetAction<
    typeof getCarouselSuccess,
    typeof getCarouselError
>;
export type FeaturedProductsState = {
    readonly data: Array<FeaturedProductType>;
} & FetchState;

export type ProductsAction = ActionType<
    | typeof getProductsSuccess
    | typeof getProductsError
    | typeof getProductsLoading
>;
export type GetProductsType = GetAction<
    typeof getProductsSuccess,
    typeof getProductsError
>;
export type ProductsState = {
    readonly data: Array<ProductType>;
} & FetchState;

export type MockStoreCreatorType = MockStoreCreator<
    State,
    ThunkDispatch<State, null, Action<string>>
>;

export default State;
