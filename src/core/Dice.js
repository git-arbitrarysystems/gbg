const defaults = {
  values: 6,
};

/**
 * Dice
 * @param {Object} options - Options
 * @param {number|*[]} [options.values=6] - Amount of values (based 1) or an array of values
 * @returns {object} An object representing a dice
 */

const Dice = (options) => {
  options = Object.assign({}, defaults, options);

  const values =
    typeof options.values === "number"
      ? [...Array(options.values)].map((v, i) => i + 1)
      : Array.isArray(options.values)
      ? options.values
      : undefined;

  if (!values) throw new Error("Invalid option for `values`");

  const exposed = {
    //options: options,
    sides: values.length,
    value: values[0],
    roll: () => {
      exposed.value = values[Math.floor(Math.random() * values.length)];
      return exposed.value;
    },
  };

  return exposed;
};

export { Dice };
