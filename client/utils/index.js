/**
 * Gets year from string in format "2018-12-19"
 * @param stringDate - '2018-12-19'
 */
export const getYearFromString = stringDate => stringDate.slice(0, 4);

export const smoothScrollTo = node => {
    node.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
};
