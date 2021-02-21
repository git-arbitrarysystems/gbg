const defaults = {
  index: 0,
  connections: [],
};

/**
 * Field - a place on the board for a player to be
 * @param {object} options -
 * @param {number} options.index - The index for this field
 */
const Field = (options) => {
  options = Object.assign({}, defaults, options);
  return {
    //options: options,
    index: options.index,
    connections: options.connections,
  };
};

export { Field };
