import { RSAA } from "redux-api-middleware";
import {
    FETCH_CATALOGUE_LOADING,
    FETCH_CATALOGUE_SUCCESS,
    FETCH_CATALOGUE_ERROR
} from "constants/catalogue";

export const catalogueEndpoint = "/api/";
export const headers = { "Content-Type": "application/json" };

function fetchCatalogue() {
    return {
        [RSAA]: {
            endpoint: catalogueEndpoint,
            headers,
            method: "GET",
            types: [
                FETCH_CATALOGUE_LOADING,
                FETCH_CATALOGUE_SUCCESS,
                FETCH_CATALOGUE_ERROR
            ],
            fetch
        }
    };
}

export default fetchCatalogue;
