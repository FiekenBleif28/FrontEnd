// Rest Parameter & Spread Operator (notasi ...)

// 1. Rest Parameter
// -----> rest parameter bertipe array
// -----> rest parameter harus di posisi terakhir
const funct1 = (Param1, Param2, ...rest) => {
  // let array = [Param1, Param2, Param3, Param4, Param5];
  let result = 0 + Param1 + Param2;
  rest.forEach((item) => (result += item));
  console.log(result);
};
funct1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// 2. Spread Operator
// berkaitan dengan array dan object
const numbers = [1, 2, 3, 4, 5];

console.log(...numbers); // 1 2 3
console.log(...numbers); // 1 2 3

//kegunaan spread operator pada array
//1. duplikat array
let numbers2 = [...numbers];
console.log(numbers2);
//2. Menggabungkan array
let num1 = [1, 2, 3];
let num2 = [1, 2, 3];
let num3 = [1, 2, 3];
let combineNume1 = num1.concat(numbers2, num3);
let combineNume2 = [...num1, ...num2, ...num3];
console.log(combineNume1);
console.log(combineNume2);

//kegunaan spread operator pada object
//1. Duplikasi Object
const student1 = {
  fullName: "john",
  status: "active",
};

const student2 = { ...student1, address: "Manado" };
console.log(student2);

//2. untuk menggabungkan object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combineObj = { ...obj1, ...obj2 };
console.log(combineObj);
