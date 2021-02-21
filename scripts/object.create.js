const { exit } = require("process");

fs = require("fs");

const dir = process.env.INIT_CWD,
  name = process.argv[2];

if (!name) {
  console.warn("Please supply a name for this object.");
  exit();
}

const data = [
  [
    `${dir}/${name}.js`,
    `const defaults = {};
  
/**
 * ${name}
 * @param {object} options -
 */
const ${name} = (options) => {
  options = Object.assign({}, defaults, options);
  return {};
};

export { ${name} }`,
  ],
  [
    `${dir}/${name}.test.js`,
    `import { ${name} } from "./${name}";
describe("A default ${name}", () => {
  var ${name.toLowerCase()} = ${name}(); // Default ${name}
  test("is not undefined", () => {
      expect(${name.toLowerCase()}).not.toBeUndefined();
  });
})
`,
  ],
];

data.forEach((pair) => {
  const [path, content] = pair;
  console.log("Write", path, "...");
  fs.access(path, fs.F_OK, (err) => {
    if (err) {
      fs.writeFile(path, content, () => {
        console.log("SUCCESS", "Written", path);
      });
    } else {
      console.log("ERROR", "Already exists", path);
    }
  });
});

// const
// fs.writeFile(`${dir}/${name}.js`, object, () => {
//   console.log(`Created ${dir}/${name}.js...OK`);
// });
// fs.writeFile(`${dir}/${name}.test.js`, test, () => {
//   console.log(`Created ${dir}/${name}.test.js...OK`);
// });
