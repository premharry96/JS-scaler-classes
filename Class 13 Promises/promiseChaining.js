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
  .catch((error) => {
    console.log(error, "first catch");
  })
  .then((result) => {
    console.log(result);
    return winIcecream();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error, "second catch");
  });
