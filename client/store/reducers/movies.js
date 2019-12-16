const initialState = {
    movies: {
        data: [],
        total: 0,
    },
    film: null,
};

export default function movies(state = initialState, { type, payload }) {
    switch (type) {
        case 'SET_MOVIES':
            return {
                ...state,
                movies: {
                    data: payload.data,
                    total: payload.total,
                },
            };
        case 'SET_FILM':
            return {
                ...state,
                film: payload,
            };
        default: return state;
    }
};
