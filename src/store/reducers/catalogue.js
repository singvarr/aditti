import catalogue from "store/state";

const defaultState = catalogue.items;

function reducer(state = defaultState, action) {
    switch (action.type) {
    default:
        return state;
    }
}

export default reducer;
