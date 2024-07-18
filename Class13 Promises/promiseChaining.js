const cleanRoom = function () {
  return new Promise((resolve, reject) => {
    resolve("cleaned my room");
  });
};

let garbageRemove = function () {
  return new Promise((resolve, reject) => {
    resolve("garbage removed");
  });
};

let winIcecream = function () {
  // return a promise and chain it with remGarbage
  return new Promise((resolve, reject) => {
    reject("abcd");
  });
};

cleanRoom()
  .then((result) => {
    console.log(result);
    return garbageRemove();
  })
  .then((result) => {
    console.log(result);
    return winIcecream();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

fetchByPromise(file1).then((res) => {
  ansArray.push(res);
  fetchByPromise(file2)
    .then((res) => {
      ansArray.push(res);
    })
    .then(() => {
      ansArray.push("All files have been read");
    });
});
