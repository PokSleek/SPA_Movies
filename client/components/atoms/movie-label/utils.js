export const genresParser = genres => {
    switch (genres.length) {
        case 1: return genres[0];
        case 2: return genres.join(' & ');
        default: return genres.join(', ');
    }
};
/**
 * Gets year from string in format "2018-12-19"
 * @param stringDate - '2018-12-19'
 */
export const getYearFromString = stringDate => stringDate.slice(0, 4);
