import { Player } from "./Player";

describe("A Player", () => {
  const p = Player();
  test("has a name", () => {
    expect(p.name).not.toBeUndefined();
  });
});
