import { Dice } from "./core/Dice";
import { Player } from "./core/Player";

/**
 *
 * Testing Dice
 *
 * */
[
  Dice(), // Default dice
  Dice({ values: ["A", "B", "C"] }), // Three-sided dice
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
