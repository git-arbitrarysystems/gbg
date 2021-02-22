const defaults = {};

/**
 * Player
 * @param {object} options -
 * @param {string} options.name - The name of the player
 */
const Player = (options) => {
  options = Object.assign({}, defaults, options);

  const name = typeof options.name === "string" ? options.name : "Player";

  return {
    //options: options,
    name: name,
  };
};

export { Player, defaults };
