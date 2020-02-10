import { api } from '../create-api';
import { ENDPOINTS } from '../config';
import { getSpreadData } from '../utils';

const { GET_MOVIES } = ENDPOINTS;

export const getMovieById = ({ id }) =>
    api
        .get(`${GET_MOVIES}/${id}`)
        .then(getSpreadData);
