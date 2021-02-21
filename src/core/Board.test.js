import { Board, defaults } from "./Board";

describe("A default Board", () => {
  var board = Board();
  test(`has ${defaults.fields} fields`, () => {
    expect(board.fields).toHaveLength(defaults.fields);
  });

  test(`has ${defaults.fields - 1} connections`, () => {
    expect(board.fields.reduce((a, c) => a + c.connections.length, 0)).toBe(
      defaults.fields - 1
    );
  });
});

describe("A looped Board", () => {
  var board = Board({ loop: true });
  test(`has ${defaults.fields} connections`, () => {
    expect(board.fields.reduce((a, c) => a + c.connections.length, 0)).toBe(
      defaults.fields
    );
  });
});

describe("A bidirectional Board", () => {
  var board = Board({ bidirectional: true });
  test(`has ${defaults.fields * 2 - 2} connections`, () => {
    expect(board.fields.reduce((a, c) => a + c.connections.length, 0)).toBe(
      defaults.fields * 2 - 2
    );
  });
});

describe("A bidirectional looped Board", () => {
  var board = Board({ bidirectional: true, loop: true });
  test(`has ${defaults.fields * 2} connections`, () => {
    expect(board.fields.reduce((a, c) => a + c.connections.length, 0)).toBe(
      defaults.fields * 2
    );
  });
});
