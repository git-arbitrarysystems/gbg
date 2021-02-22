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

  /** Sanitize */

  /** Set initial state */
  const state = {
    index: options.index,
    connections: options.connections,
  };

  return {
    state: state,
    get connections() {
      return state.connections;
    },
  };
};

export { Field, defaults };
