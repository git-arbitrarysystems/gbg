import { Dice } from "./Dice";

test("The default dice has a 6 sides, a default value of 1 and you can roll 'm", () => {
  var dice = Dice(); // Default dice
  expect(dice.sides).toBe(6);
  expect(dice.value).toBe(1);
  expect(typeof dice.roll).toBe("function");
});

test("A three sided dice also works", () => {
  var dice = Dice({ values: ["A", "B", "C"] }); // Three-sided dice

  expect(dice.sides).toBe(3);
  expect(dice.value).toBe("A");
});
