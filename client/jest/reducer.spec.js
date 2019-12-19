import movies from '../store/reducers/movies';
import { setFilm, setMovies } from '../store/actions/movies'

import { mockedResponse1 } from '../mock/getMovieById';
import mockedResponse2 from '../mock/getMovies';

const initialState = {
    movies: {
        data: [],
        total: 0,
    },
    film: null,
};

describe('Reducer', () => {

    let state;

    beforeEach(() => {
        state = movies(undefined, {});
    });

    it('Should not update state with wrong action', () => {
        state = movies(state, { type: 'WRONG_ACTION', payload: { data: 'olala' } });
        expect(state).toEqual(initialState);
    });

    it('Should correctly update in state with setFilm action', () => {
        const expectedResult = {
            ...initialState,
            film: mockedResponse1,
        };
        state = movies(state, setFilm(mockedResponse1));
        expect(state).toEqual(expectedResult);
    });

    it('Should correctly update in state with setMovies action', () => {
        const expectedResult = {
            ...initialState,
            movies: {
                data: mockedResponse2.data,
                total: mockedResponse2.total,
            },
        };
        state = movies(state, setMovies(mockedResponse2));
        expect(state).toEqual(expectedResult);
    });
});
