export const setMovies = movies =>
    ({
        type: 'SET_MOVIES',
        payload: movies,
    });

export const setFilm = movie =>
    ({
        type: 'SET_FILM',
        payload: movie,
    });

export const setSearchParams = params =>
    ({
        type: 'SET_SEARCH_PARAMS',
        payload: params,
    });
