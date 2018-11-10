import { SET_CATEGORY } from "actions/filter";

function reducer(state = "all", action) {
    switch (action.type) {
        case SET_CATEGORY:
            return action.category;

        default:
            return state;
    }
}
export default reducer;
