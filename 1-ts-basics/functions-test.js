const { getName } = require("./dist/functions");
console.log(getName());
console.log(
  getName({
    first: "manan",
    last: "bari",
  })
);
