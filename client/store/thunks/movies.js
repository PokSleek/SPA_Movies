import { getMovies as fetchMovies, getMovieById } from '../../core/api/requests';
import { setMovies, setFilm } from '../actions/movies';


export const getMovies = params => dispatch =>
    fetchMovies(params)
        .then(data => dispatch(setMovies(data)))
        .catch(error => console.log(error));

export const getFilm = params => dispatch =>
    getMovieById(params)
        .then(data => dispatch(setFilm(data)))
        .catch(error => console.log(error));
