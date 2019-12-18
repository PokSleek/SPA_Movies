import { api } from 'core/api/create-api';
import { ENDPOINTS } from 'core/api/config';
import { getSpreadData } from 'core/api/utils';

const { GET_MOVIES } = ENDPOINTS;

export const getMovies = ({ search, searchBy, sortBy } = {}) =>
    api
        .get(`${GET_MOVIES}`, { search, searchBy, sortBy })
        .then(getSpreadData);
