import { shuffle } from "../utils";

const defaults = {
  board: null,
  players: [],
  utils: {
    dice: [],
  },
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

  const selectNextPlayer = () => {
    exposed.currentPlayer =
      ((exposed.currentPlayer || -1) + 1) % exposed.players.length;
    return exposed.players[exposed.currentPlayer];
  };

  const exposed = {
    players: options.players,
    board: options.board,
    utils: { dice: options.utils.dice },
    initialize: () => {
      /**
       * Shuffle players */
      exposed.players = shuffle(exposed.players);
      /**
       * Point to the player now at index:0 */
      selectNextPlayer();
    },
  };

  return exposed;
};

export { Game, defaults };
