const { reject } = require("async");

const placeOrder = (order) => {
  return new Promise((resolve, reject) => {
    if (order === "coffee") {
      resolve("Served coffee");
    } else {
      reject("cannot serve coffee");
    }
  });
};

const orderProcessed = (orderId) => {
  return new Promise((resolve, reject) => {
    resolve(`${orderId} processed`);
  });
};

const generateBill = (procOrder) => {
  return new Promise((resolve, reject) => {
    resolve(`generate bill for ${procOrder}`);
  });
};

placeOrder("coffee")
  .then((data) => {
    console.log(data);
    return orderProcessed("001");
  })
  .catch((error) => console.log(error))
  .then((Id) => {
    console.log(Id);
    return generateBill("001");
  })
  .then((bill) => console.log(bill));
