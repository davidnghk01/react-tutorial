import {combineReducers} from "redux";

export default combineReducers({films, filterFilms});

function films (state= [], action) {
    console.log(action);
    switch (action.type) {
        case "FETCH_FILMS_DONE":
            return action.films;
        default:
            return state;
    }
}

function filterFilms(state = '', action) {
    switch (action.type) {
        case "FILTER_FILM":
            return action.filter;
        default:
            return state;
    }
}