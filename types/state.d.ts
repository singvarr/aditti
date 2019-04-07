import { ActionType, StateType, getType } from "typesafe-actions";
import { Action } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Map } from "immutable";
import { MockStoreCreator } from "redux-mock-store";

import reducer from "reducers/.";
import * as getCategoriesConstants from "constants/categories";
import * as getCarouselConstants from "constants/carousel";
import * as getCartConstants from "constants/cart";
import * as getProductsConstants from "constants/products";

import { postAuthActions } from "actions/auth";
import { getCarouselActions } from "actions/carousel";
import * as cart from "actions/cart";
import { getCategoriesActions } from "actions/categories";
import { getProductsActions } from "actions/products";

import CategoryType from "types/categories";
import FeaturedProductType from "types/carousel";
import ProductType from "types/products";
import { FeaturedProducts } from "components/FeaturedProducts/FeaturedProducts";

type State = StateType<typeof reducer>;

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
export type GetCategoriesActionTypes =
    | typeof getCategoriesConstants.GET_CATEGORIES_ERROR
    | typeof getCategoriesConstants.GET_CATEGORIES_SUCCESS
    | typeof getCategoriesConstants.GET_CATEGORIES_LOADING;
export type GetCategoriesType = ThunkAction<
    Promise<
        | ActionType<typeof getCategoriesActions.getCategoriesSuccess>
        | ActionType<typeof getCategoriesActions.getCategoriesError>
    >,
    State,
    null,
    Action<GetCategoriesActionTypes>
>;

export type FeaturedProductsAction = ActionType<typeof getCarouselActions>;
export type FeaturedProductsState = {
    readonly data: Array<FeaturedProductType>;
} & FetchState;
export type GetFeaturedProductsActionTypes =
    | typeof getCarouselConstants.GET_CAROUSEL_ERROR
    | typeof getCarouselConstants.GET_CAROUSEL_SUCCESS
    | typeof getCarouselConstants.GET_CAROUSEL_LOADING;
export type GetFeaturedProductsType = ThunkAction<
    Promise<
        | ActionType<typeof getCarouselActions.getCarouselSuccess>
        | ActionType<typeof getCarouselActions.getCarouselError>
    >,
    State,
    null,
    Action<GetFeaturedProductsActionTypes>
>;

export type ProductsAction = ActionType<typeof getProductsActions>;
export type ProductsState = {
    readonly data: Array<ProductType>;
} & FetchState;
export type GetProductsActionTypes =
    | typeof getProductsConstants.GET_PRODUCTS_ERROR
    | typeof getProductsConstants.GET_PRODUCTS_SUCCESS
    | typeof getProductsConstants.GET_PRODUCTS_LOADING;
export type GetProductsType = ThunkAction<
    Promise<
        | ActionType<typeof getProductsActions.getProductsSuccess>
        | ActionType<typeof getProductsActions.getProductsError>
    >,
    State,
    null,
    Action<GetProductsActionTypes>
>;

export type MockStoreCreatorType = MockStoreCreator<
    State,
    ThunkDispatch<State, null, Action<any>>
>;

export default State;
