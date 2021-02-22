const defaults = {
  id: 0,
  connections: [],
};

/**
 * Field - a place on the board for a player to be
 * @param {object} options -
 * @param {number|string} options.index - The id for this field
 */
const Field = (options) => {
  options = Object.assign({}, defaults, options);

  /** Sanitize */

  /** Set initial state */
  const state = {
    id: options.id,
    connections: options.connections,
  };

  return {
    state: state,
    get id() {
      return state.id;
    },
    get connections() {
      return state.connections;
    },
  };
};

export { Field, defaults };
