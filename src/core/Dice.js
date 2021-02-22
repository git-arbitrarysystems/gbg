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

  /** Sanitize */
  const values =
    typeof options.values === "number"
      ? [...Array(options.values)].map((v, i) => i + 1) // Default dice with n numbers
      : Array.isArray(options.values)
      ? options.values // Some custom values
      : undefined;

  if (!values) throw new Error("Invalid option for `values`");

  /** Set initial state */
  const state = {
    values: values,
    value: values[0],
  };

  return {
    state: state,
    get value() {
      return state.value;
    },
    sides: values.length,
    roll: () => {
      state.value = values[Math.floor(Math.random() * state.values.length)];
      return state.value;
    },
  };
};

export { Dice, defaults };
