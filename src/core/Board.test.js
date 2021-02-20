import { Board } from "./Board";

  test("Board() returns something", () => {
      var board = Board(); // Default Board
      expect(board).not.toBeUndefined();
  });