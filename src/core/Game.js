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
      ((state.currentPlayer === undefined ? -1 : state.currentPlayer) + 1) %
      state.players.length;
    return state.players[state.currentPlayer];
  };

  const handleStep = () => {
    const SID = state.flow[state._step];
    console.log(`${SID}`);

    let sum,
      player = state.players[state.currentPlayer];

    switch (SID) {
      case Events.PLAYER_NEXT:
        player = selectNextPlayer();
        console.log("\tNew player:", player);
        break;
      case Events.DICE_ROLL:
        sum = state.utils.dice.reduce((a, c) => (a += c.roll()), 0);
        console.log(`\t${state.utils.dice.length} dice rolled ${sum}`);
        break;
      case Events.ANALYSE:
        break;
      case Events.PLAYER_MOVE:
        sum = state.utils.dice.reduce((a, c) => (a += c.value), 0);
        var before = player.field,
          next,
          i;
        for (i = 0; i < sum; i++) {
          next = state.board.getFieldById(player.field).connections[0];
          if (next) player.field = next;
        }
        console.log(
          `\tPlayer ${player.name} moved from ${before}/${
            state.board.fields.length - 1
          } to ${player.field}/${state.board.fields.length - 1}`
        );
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
       * Position players */
      state.players.forEach((player) => {
        player.field = state.board.fields[0].id;
      });
      /**
       * Start the game */
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
