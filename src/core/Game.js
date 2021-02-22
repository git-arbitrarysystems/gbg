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

  /** Initial state */
  const state = {
    players: options.players,
    board: options.board,
    utils: { dice: options.utils.dice },
    flow: options.flow,
    _step: 0,
  };

  const start = () => {
    state.started = true;
  };
  const stop = () => {
    state.started = false;
  };
  const pause = () => {
    state.paused = true;
  };
  const unpause = () => {
    state.paused = false;
  };

  const selectNextPlayer = () => {
    state.currentPlayer =
      ((state.currentPlayer || -1) + 1) % state.players.length;
    return state.players[state.currentPlayer];
  };

  const handleStep = () => {
    const step_id = state.flow[state._step];
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
    state._step = (state._step + 1) % state.flow.length;
  };

  return {
    state: state,
    initialize: () => {
      /**
       * Shuffle players */
      state.players = shuffle(state.players);
      /**
       * Point to the player now at index:0 */
      selectNextPlayer();
      /**
       * Start the game
       */
      start();
    },
    start: start,
    stop: stop,
    pause: pause,
    unpause: unpause,
    step: () => {
      handleStep();
      next();
    },
  };
};

export { Game, defaults };
