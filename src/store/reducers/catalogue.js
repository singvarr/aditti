import {
    FETCH_CATALOGUE_LOADING,
    FETCH_CATALOGUE_SUCCESS,
    FETCH_CATALOGUE_ERROR
} from "constants/catalogue";

export const defaultState = {
    data: {
        catalogue: {
            items: []
        },
        categories: [],
        slides: []
    },
    hasError: false,
    isLoading: false
};

function reducer(state = defaultState, action) {
    switch (action.type) {
    case FETCH_CATALOGUE_LOADING:
        return Object.assign({}, state, { isLoading: true });

    case FETCH_CATALOGUE_SUCCESS:
        return Object.assign({}, state, {
            data: action.payload,
            isLoading: false
        });

    case FETCH_CATALOGUE_ERROR:
        return Object.assign({}, state, {
            hasError: true,
            isLoading: false
        });

    default:
        return state;
    }
}

export default reducer;
