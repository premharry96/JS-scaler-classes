const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 3000);
});

const fetchData = () => {
  promise.then((data) => console.log(data));
  console.log("i am done");
};

const handlePromise = async () => {
  const msg1 = await promise;
  console.log(msg1); // promise is already resolved here so no need to resolve it again in the next line and hence the o/p comes immediately
  const msg2 = await promise;
  console.log(msg2);
  console.log("i am done");
};

console.log("start");
// fetchData();
handlePromise();
console.log("end");
