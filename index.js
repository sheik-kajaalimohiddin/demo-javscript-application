const yargs = require("yargs");
const { add, subtract,multiply } = require("./calculator");

const options = yargs(process.argv);

console.log("hello world");
console.log(add(2,3));
console.log(subtract(2,3));
console.log(multiply(2,3));
