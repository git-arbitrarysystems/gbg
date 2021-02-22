const defaults = {
  name: "Player",
  field: undefined,
};

/**
 * Player
 * @param {object} options -
 * @param {string} options.name - The name of the player
 * @param {string|number} options.field - The field the player currently occupies
 */
const Player = (options) => {
  options = Object.assign({}, defaults, options);

  /** Sanitize */

  /** Set initial state */
  const state = {
    name: options.name,
    field: options.field,
  };

  return state;
};

export { Player, defaults };
