import { Dice, Player, Board, Game } from "./core";

console.log(`
---------------------------------
Generic board-game class overview
---------------------------------
`);

[
  /**
   *
   * Testing Dice
   *
   * */
  Dice(), // Default dice
  Dice({ values: ["A", "B", "C"] }), // Three-sided dice
  Dice({ values: ["0", "1"] }), // Coin-flip
].forEach((dice) => {
  const results = [];
  for (var i = 0; i < 50; i++) {
    results.push(dice.roll());
  }
  console.log("Dice.roll results:", results.join(" "));
});

/**
 *
 * Testing Player
 *
 */
[
  Player(), // Default player
  Player({ name: "Jasper" }), // Custom player
].forEach((player) => {
  console.log("Player:", player);
});

/**
 *
 * Testing Board
 *
 */
[
  Board(), // Default board,
  Board({ loop: true, bidirectional: true }), // Looping board
].forEach((board) => {
  console.log("Board:");
  console.dir(board, { depth: null });
});

/**
 *
 * Testing Game
 *
 */
[
  Game({
    board: Board(),
    players: [Player({ name: "Jasper" }), Player({ name: "Ida" })],
    utils: {
      dice: [Dice()],
    },
  }), // Simple game,
].forEach((game) => {
  console.log("Game:");
  console.dir(game, { depth: null });
  game.initialize();
  console.dir(game, { depth: null });

  /** Test some steps */
  for (var i = 0; i < 20; i++) {
    game.step();
  }
});
