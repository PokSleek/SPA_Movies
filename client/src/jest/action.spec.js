import { setMovies, setFilm } from '../store/actions/movies';

import { mockedResponse1 } from '../mock/getMovieById';
import mockedResponse2 from '../mock/getMovies';

describe('Actions', () => {

    it('Should create setMovies action with current data', () => {
        const result = setMovies(mockedResponse2);
        expect(result).toEqual({
            type: 'SET_MOVIES',
            payload: mockedResponse2,
        });
    });

    it('Should create setMovies action with current data', () => {
        const result = setFilm(mockedResponse1);
        expect(result).toEqual({
            type: 'SET_FILM',
            payload: mockedResponse1,
        });
    });
});
