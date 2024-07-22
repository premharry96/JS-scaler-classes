// const getData = () => {
//   //some API call
//   return "data";
// };

// console.log(getData());

//Async func
const fetchData = async () => {
  //some API call
  return "data";
};

const dataPromise = fetchData();
console.log(dataPromise);

dataPromise.then((res) => console.log(res));

//Async func returns a promise
const promise = new Promise((resolve, reject) => {
  resolve("Promise is resolved");
});

const fetchData1 = async function () {
  return promise;
};

console.log(fetchData1());
fetchData1().then((res) => console.log(res));
