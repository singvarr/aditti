import { SET_CATEGORY } from "constants/filter";

export function setCategory(category) {
    return {
        type: SET_CATEGORY,
        category
    };
}
