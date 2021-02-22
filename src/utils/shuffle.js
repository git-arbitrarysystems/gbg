/**
 *
 * @param {*[]} array - The Array to be shuffled
 * @returns {*[]} - The shuffled Array
 */
const shuffle = (array) => array.sort(() => Math.random() - 0.5);
export { shuffle };
