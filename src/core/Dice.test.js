import { Dice } from "./Dice";

describe("A default Dice", () => {
  var dice = Dice(); // Default dice
  test(" has a 6 sides, a default value of 1 and you can roll 'm", () => {
    expect(dice.sides).toBe(6);
    expect(dice.value).toBe(1);
    expect(typeof dice.roll).toBe("function");
  });
});

describe("A three sided custom Dice", () => {
  var dice = Dice({ values: ["A", "B", "C"] }); // Three-sided dice
  test("also works", () => {
    expect(dice.sides).toBe(3);
    expect(dice.value).toBe("A");
  });
});
