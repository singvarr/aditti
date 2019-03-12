import { RSAAction } from "redux-api-middleware";
import {
    GET_CATEGORIES_LOADING,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR
} from "constants/categories";

export type CategoriesGetAction = RSAAction<
    typeof GET_CATEGORIES_LOADING,
    typeof GET_CATEGORIES_SUCCESS,
    typeof GET_CATEGORIES_ERROR
>;

export type CategoriesLoadingAction = {
    readonly type: typeof GET_CATEGORIES_LOADING;
};
export type CategoriesErrorAction = {
    readonly type: typeof GET_CATEGORIES_ERROR;
};
export type CategoriesSuccessAction = {
    readonly type: typeof GET_CATEGORIES_SUCCESS;
    readonly payload: Array<CategoryType>;
};

export type CategoriesAction =
    | CategoriesSuccessAction
    | CategoriesLoadingAction
    | CategoriesErrorAction;

export type CategoryType = {
    name: string;
    src: string;
};

export type CategoriesState = {
    readonly data: Array<CategoryType>;
    readonly hasError: boolean;
    readonly isLoading: boolean;
};
