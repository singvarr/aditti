import { RSAA } from "redux-api-middleware";
import {
    FETCH_CATALOGUE_LOADING,
    FETCH_CATALOGUE_SUCCESS,
    FETCH_CATALOGUE_ERROR
} from "constants/catalogue";

const catalogueEndpoint = "/api/catalogue";

function fetchCatalogue() {
    return {
        [RSAA]: {
            endpoint: catalogueEndpoint,
            headers: { "Content-Type": "application/json" },
            method: "GET",
            types: [
                FETCH_CATALOGUE_LOADING,
                FETCH_CATALOGUE_SUCCESS,
                FETCH_CATALOGUE_ERROR
            ]
        }
    };
}

export default fetchCatalogue;
