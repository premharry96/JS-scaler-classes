radius = [1, 2, 3, 4];

//list of diameters
//list of circumference
//list of area

let calDia = (r) => 2 * r;
let calCir = (r) => 2 * 3.14 * r;
let calArea = (r) => 3.14 * r * r;

const calc = (radius, resultCallback) => {
  let results = [];
  for (let i = 0; i < radius.length; i++) {
    results.push(resultCallback(radius[i]));
  }
  return results;
};

let diameters = calc(radius, calDia);
let circumference = calc(radius, calCir);
let area = calc(radius, calArea);
console.log(diameters);
console.log(circumference);
console.log(area);
