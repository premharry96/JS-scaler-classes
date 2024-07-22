//const { reject } = require("async");

const placeOrder = (order) => {
  return new Promise((resolve, reject) => {
    if (order === "coffee") {
      resolve("Coffee order placed");
    } else {
      reject("cannot place coffee order");
    }
  });
};

const orderProcessed = (orderId) => {
  return new Promise((resolve, reject) => {
    resolve(`${orderId} processed and served`);
  });
};

const generateBill = (procOrder) => {
  return new Promise((resolve, reject) => {
    resolve(`generate bill for ${procOrder}`);
  });
};

const handlingOrder = async () => {
  let isOrderPlaced = placeOrder("coffee");
  let isPromiseHandled = await isOrderPlaced;
  console.log(isPromiseHandled);
  let orderPromise = await orderProcessed("001 - coffee");
  console.log(orderPromise);
  let billPromise = await generateBill("001 - coffee");
  console.log(billPromise);
};

handlingOrder();

// placeOrder("coffe")
//   .then((data) => {
//     console.log(data);
//     return orderProcessed("001");
//   })
//   .then((Id) => {
//     console.log(Id);
//     return generateBill("001");
//   })
//   .then((bill) => console.log(bill))
//   .catch((error) => console.log(error));
