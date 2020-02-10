import { api } from '../create-api';
import { ENDPOINTS } from '../config';
import { getSpreadData } from '../utils';

const { GET_MOVIES } = ENDPOINTS;

export const getMovies = ({ search, searchBy, sortBy, filter } = {}) =>
    api
        .get(`${GET_MOVIES}`, { search, searchBy, sortBy, filter, sortOrder: 'desc' })
        .then(getSpreadData);
