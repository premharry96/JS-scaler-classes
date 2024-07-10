let coinTossPromise = new Promise((resolve, reject) => {
  let a = 10;
  let b = 10;
  if (a === b) {
    resolve("resolved");
  } else {
    reject("rejected");
  }
});

console.log(coinTossPromise);

coinTossPromise.then((result) => console.log(result));
coinTossPromise.catch((result) => console.log(result));
coinTossPromise.finally(() => console.log("Promise settled"));
