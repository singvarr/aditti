import { ActionType } from "typesafe-actions";
import { getCarouselActions } from "actions/carousel";
import { FetchState } from ".";

export type FeaturedProductsType = {
    readonly description: string;
    readonly heading: string;
    readonly imgSrc?: string;
};

export type FeaturedProductsAction = ActionType<typeof getCarouselActions>;
export type FeaturedProductsState = {
    readonly data: Array<FeaturedProductsType>;
} & FetchState;
