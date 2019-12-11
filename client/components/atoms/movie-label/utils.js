export const genresParser = genres => {
    switch (genres.length) {
        case 1: return genres[0];
        case 2: return genres.join(' & ');
        default: return genres.join(', ');
    }
};
