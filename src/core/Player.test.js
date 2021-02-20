import { Player } from "./Player";

test("a player has a name", () => {
  const p = Player();
  expect(p.name).not.toBeUndefined();
});
