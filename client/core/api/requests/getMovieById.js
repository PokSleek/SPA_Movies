import { api } from 'core/api/create-api';
import { ENDPOINTS } from 'core/api/config';
import { getSpreadData } from 'core/api/utils';

const { GET_MOVIES } = ENDPOINTS;

export const getMovieById = ({ id }) =>
    api
        .get(`${GET_MOVIES}/${id}`)
        .then(getSpreadData);
