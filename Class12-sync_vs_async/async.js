const t1 = function () {
  console.log("t1");
};

const t2 = function () {
  console.log("t2");
};

const heavyTask = function () {
  console.log("heavy task called");
  setTimeout(() => {
    console.log("async");
  }, 5000);
};

t1();
heavyTask();
t2();
