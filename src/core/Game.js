import { shuffle } from "../utils";
import { Basic, Events } from "./Game.logic";

const defaults = {
  board: null,
  players: [],
  utils: {
    dice: [],
  },
  flow: Basic,
};

/**
 * Game
 * @param {object} options -
 * @param {object} options.board -
 * @param {object[]} options.players -
 * @param {object} options.utils
 * @param {object[]} options.utils.dice -
 * @param {string[]} options.type - An array of strings describing the fundamental locical steps of a game-loop
 */
const Game = (options) => {
  options = Object.assign({}, defaults, options);

  if (!options.board) throw new Error("Missing option `options.board`");
  if (options.players.length === 0)
    throw new Error("Missing `options.players`");
  if (options.utils.dice.length === 0)
    throw new Error("Missing `options.utils.dice`");

  const start = () => {
    exposed.started = true;
  };
  const stop = () => {
    exposed.started = false;
  };
  const pause = () => {
    exposed.paused = true;
  };
  const unpause = () => {
    exposed.paused = false;
  };

  const selectNextPlayer = () => {
    exposed.currentPlayer =
      ((exposed.currentPlayer || -1) + 1) % exposed.players.length;
    return exposed.players[exposed.currentPlayer];
  };

  const handleStep = () => {
    const step_id = exposed.flow[exposed._step];
    console.log(step_id);
    switch (step_id) {
      case Events.PLAYER_NEXT:
        break;
      case Events.DICE_ROLL:
        break;
      case Events.ANALYSE:
        break;
      case Events.PLAYER_MOVE:
        break;
    }
  };
  const next = () => {
    exposed._step = (exposed._step + 1) % exposed.flow.length;
  };

  const exposed = {
    players: options.players,
    board: options.board,
    utils: { dice: options.utils.dice },
    flow: options.flow,
    initialize: () => {
      /**
       * Shuffle players */
      exposed.players = shuffle(exposed.players);
      /**
       * Point to the player now at index:0 */
      selectNextPlayer();
      /**
       * Start the game
       */
      start();
    },
    _step: 0,
    step: () => {
      handleStep();
      next();
    },
  };

  return exposed;
};

export { Game, defaults };
