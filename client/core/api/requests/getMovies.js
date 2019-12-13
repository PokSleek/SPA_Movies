import { api } from 'core/api/create-api';
import { ENDPOINTS } from 'core/api/config';
import { getIdentityData } from 'core/api/utils';

const { GET_MOVIES } = ENDPOINTS;

export const getMovies = params =>
    api
        .get(`${GET_MOVIES}`, params)
        .then(getIdentityData);
