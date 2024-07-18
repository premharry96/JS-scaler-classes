const { error } = require("console");
const fs = require("fs");

let readFile1Promise = fs.promises.readFile("./file1.txt", "utf-8");
let readFile2Promise = fs.promises.readFile("./file2.txt", "utf-8");

//serial async promise
readFile1Promise
  .then((result) => {
    console.log(result);
    return readFile2Promise;
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
