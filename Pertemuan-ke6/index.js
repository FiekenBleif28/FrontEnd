// //Array & Object in Javascript
// //tanoa array
// // let student1 = "Kia";
// // let student2 = "yaki";
// // let student3 = "Tangkoko";
// // let student4 = "yakz";

// //dengan array
// //cara yang pertama array literal
// let student = ["Kia", "John", "Jes", "Rob"];
// let john = ["Kia", 30, ture, [30, 40]]; //bisa beda tipe data
// //cara yang kedua kata kunci "New"
// let employees = new Array("Kia", "John", "Jes", "Rob");

// console.log(student);
// studnet[1] = "Edgar";
// console.log(student[1]); //akses
// console.log(student.length);
// console.log(student[student.length - 1]);

// //Array Method
// let array = [1, 2, 3, "Hello", false, true];
// //1. to string
// console.log(array.toString());
// //2. joint
// console.log(array.join("-"));
// console.log(array.join(" "));
// console.log(array.join("#"));
// //3. pop
// array.pop();
// console.log(array);
// //4. push
// array.push("Selamat pagi");
// console.log(array);
// //5. shift
// array.shift();
// console.log(array);
// //6. unshift
// array.unshift("selamat pagi");
// console.log(array);
// //7. splice
// array.splice(3, 0, 4, 5);
// console.log(array);
// //8. slice
// let numbers = array.slice(1, 5);
// console.log(numbers);
// //9. concat
// let num1 =[1, 2, 3];
// let num2 =[4, 5, 6];
// let num3 =[7, 8, 9];
// let combineNum = num1.concat(num2, num3);
// console.log(combineNum);

//Object
//cara deklarasi object
let johnObj = {
  fullName: "John Doe",
  age: 30,
  isActive: true,
  grade: [90, 80, 100],
  address: {
    street: "jl gurita",
    city: "Manado",
    provinci: "Sulut",
  },
  sayHello: function () {
    console.log("Hello World");
  },
};
console.log(johnObj);
//cara akses element obj
//cara 1
console.log(johnObj.fullName);
johnObj.sayHello();
console.log(johnObj.address.street);
console.log(johnObj.grade[1]);
//cara 2
console.log(johnObj["fullName"]);
console.log(johnObj["grade"]);
console.log(johnObj["address"]["street"]);
johnObj["sayHello"]();

johnObj = "Programer";
console.log(johnObj);

delete johnObj.isActive;
console.log(johnObj);
