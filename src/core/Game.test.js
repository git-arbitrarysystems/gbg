import { Board } from "./Board";
import { Dice } from "./Dice";
import { Game } from "./Game";
import { Player } from "./Player";

describe("A default Game", () => {
  var game = Game({
    board: Board(),
    players: [Player("Jasper"), Player("Ida")],
    utils: {
      dice: [Dice()],
    },
  }); // Default Game
  test("is not undefined", () => {
    expect(game).not.toBeUndefined();
  });
});
