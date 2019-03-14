import { ActionType } from "typesafe-actions";
import { getCategoriesActions } from "actions/categories";
import { FetchState } from ".";

export type CategoryType = {
    name: string;
    src: string;
};

export type CategoriesAction = ActionType<typeof getCategoriesActions>;
export type CategoriesState = {
    readonly data: Array<CategoryType>;
} & FetchState;
