import axios from 'axios';

export function createApi(axiosConfig = {}) {

    const service = axios.create(axiosConfig);

    const api = {
        get: (url, params, config = {}) =>
            service
                .get(url, {
                    params,
                    responseType: 'json',
                    ...config,
                })
                .catch(error => Promise.reject(error)),
    };
    return ({
        api,
    });
}
