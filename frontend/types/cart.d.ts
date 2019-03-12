import { ActionType } from "typesafe-actions";
import { Map } from "immutable";
import * as cart from "actions/cart";

export type CartAction = ActionType<typeof cart>;
export type CartState = Map<string, number>;
