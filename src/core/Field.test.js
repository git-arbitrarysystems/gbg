import { Field } from "./Field";

  test("Field() returns something", () => {
      var field = Field(); // Default Field
      expect(field).not.toBeUndefined();
  });