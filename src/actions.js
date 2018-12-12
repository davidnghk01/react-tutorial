export const filterFilm = (filter) => ({
    type: "FILTER_FILM",
    filter
});

export const fetchFilms = () => ({
    type: "FETCH_FILMS"
});

export const stopFilms = () => ({
    type: "STOP_FETCH_FILMS"
});