const defaults = {
  board: null,
  players: [],
  utils: {
    dice: [],
  },
  currentPlayer: -1,
};

/**
 * Game
 * @param {object} options -
 * @param {object} options.board -
 * @param {object[]} options.players -
 * @param {object} options.utils
 * @param {object[]} options.utils.dice -
 */
const Game = (options) => {
  options = Object.assign({}, defaults, options);

  if (!options.board) throw new Error("Missing option `options.board`");
  if (options.players.length === 0)
    throw new Error("Missing `options.players`");
  if (options.utils.dice.length === 0)
    throw new Error("Missing `options.utils.dice`");

  const {
    board,
    players,
    utils: { dice },
  } = options;

  const exposed = { ...options };

  const selectNextPlayer = () => {
    exposed.currentPlayer = (exposed.currentPlayer + 1) % players.length;
    return players[exposed.currentPlayer];
  };

  exposed.initialize = () => {
    selectNextPlayer();
  };

  return exposed;
};

export { Game };
