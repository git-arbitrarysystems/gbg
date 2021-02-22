import { Field } from "./Field";

const defaults = {
  fields: 10,
  loop: false,
  bidirectional: false,
};

/**
 * Board, where the game takes place
 * @param {object} options -
 * @param {number|*[]} options.fields - All fields on this board
 * @param {boolean} options.loop - Last field connects to first field
 * @param {boolean} option.bidrectional - Players can travel forward and backward on the board
 */
const Board = (options) => {
  options = Object.assign({}, defaults, options);

  /** Sanitize */
  const length =
    typeof options.fields === "number"
      ? options.fields
      : Array.isArray(options.fields)
      ? options.fields.length
      : undefined;
  if (length === undefined) throw new Error("Invalid value for `fields`");

  var fields =
    typeof options.fields === "number"
      ? [...Array(options.fields)].map((v, i) => {
          /**
           * Define connection of field
           * */

          var next = i + 1,
            prev = i - 1;

          if (options.loop) {
            next = next % length;
            prev = (prev + length) % length;
          } else {
            if (next >= length) next = undefined;
            if (prev < 0) prev = undefined;
          }

          if (!options.bidirectional) prev = undefined;

          const connections = [];
          if (prev !== undefined) connections.push(prev);
          if (next !== undefined) connections.push(next);

          return Field({
            id: i,
            connections: connections,
          });
        })
      : Array.isArray(options.fields)
      ? options.fields
      : undefined;

  /** Set initial state */
  const state = {};

  const getFieldById = (id) => {
    return fields.filter((field) => field.id === id)[0];
  };

  return { state: state, fields: fields, getFieldById: getFieldById };
};

export { Board, defaults };
