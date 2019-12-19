import { api } from 'core/api/create-api';
import { ENDPOINTS } from 'core/api/config';
import { getSpreadData } from 'core/api/utils';

const { GET_MOVIES } = ENDPOINTS;

export const getMovies = ({ search, searchBy, sortBy, filter } = {}) =>
    api
        .get(`${GET_MOVIES}`, { search, searchBy, sortBy, filter, sortOrder: 'desc' })
        .then(getSpreadData);
