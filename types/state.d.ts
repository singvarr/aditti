import { ActionType, StateType } from "typesafe-actions";
import { Action } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Map } from "immutable";

import reducer from "reducers/.";
import * as getCarouselConstants from "constants/carousel";
import { postAuthActions } from "actions/auth";
import { getCarouselActions } from "actions/carousel";
import { getCategoriesActions } from "actions/categories";
import { getProductsActions } from "actions/products";
import * as cart from "actions/cart";

import CategoryType from "types/categories";
import FeaturedProductType from "types/carousel";
import ProductType from "types/products";

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

export type FeaturedProductsAction = ActionType<typeof getCarouselActions>;
export type FeaturedProductsState = {
    readonly data: Array<FeaturedProductType>;
} & FetchState;
export type GetFeaturedProductsType = ThunkAction<
    Promise<
        | ActionType<typeof getCarouselActions.getCarouselSuccess>
        | ActionType<typeof getCarouselActions.getCarouselError>
    >,
    State,
    null,
    Action<
        | typeof getCarouselConstants.GET_CAROUSEL_ERROR
        | typeof getCarouselConstants.GET_CAROUSEL_SUCCESS
        | typeof getCarouselConstants.GET_CAROUSEL_LOADING
    >
>;

export type ProductsAction = ActionType<typeof getProductsActions>;
export type ProductsState = {
    readonly data: Array<ProductType>;
} & FetchState;

export default State;
