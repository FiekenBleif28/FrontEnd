//JavaScript Conditional & Loop

//1. JavaScript Conditional

// let suhu = 30;
// if (suhu >= 38) {
//   console.log("Suhu diluar Panas");
// } else {
//   console.log("Suhu diluar normal");
// }
// console.log("Selesai");

// //if -else if -else
// // Jika umur 0-5 tampilkan balita
// // Jika umur 6-11 tampilkan anak-anak
// // jika umur 12-17 tampilkan remaja
// // Jika umur 18-23 tampilkan anak muda
// // Jika umur 24-40 tampilkan dewasa
// // Jika umur 41 keatas tampilkan orang tua

// let umur = 2;
// if (umur === > 0 && umut <= 5){
//     console.log("Umur termasuk kategori balita");
// } else if(umur >= 6 && umur <= 11) {
//     console.log("Umur termasuk Kategori anak-anak")
// } else if(umur >= 12 && umur <= 17) {
//     console.log("Umur termasuk Kategori remaja")
// } else if(umur >= 18 && umur <= 23) {
//     console.log("Umur termasuk Kategori anak muda")
// } else if(umur >= 24 && umur <= 40) {
//     console.log("Umur termasuk Kategori dewasa")
// } else if(umur >= 41) {
//     console.log("Umur termasuk Kategori orang tua")
// } else {
//     console log("tidak termasuk range umur")
// }

//switch - case
// let umur = 5;
// switch(umur){
//     case 1:
//         console.log("Hari minggu");
//         break;
//     case 2:
//         console.log("Hari senin");
//         break;
//     case 3:
//         console.log("Hari selasa");
//         break;
//     case 4:
//         console.log("Hari rabu");
//         break;
//     case 5:
//         console.log("Hari kamis");
//         break;
//     case 6:
//         console.log("Hari jumat");
//         break;
//     case 7:
//         console.log("Hari sabtu");
//         break;
//     default;
//         console.log("out of range")
//         break;
//     }

//2. JavaScript Loop
//1. for loop
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//2. while loop
// let i= 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

//3. do-while loop
// let i = 1;
// do
// {

//     console.log(i)
//     i++;
// } while (i <= 10);

//Array Built-In method
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers); //tampilkan sekaligus
// for (let i = 1; i < numbers.length; i++) {
//   console.log(numbers[i]); //menampilkan isi array satu per satu
// }

//1. forEach()
// numbers.forEach(function(value){
//     console.log(value);
// });

//2. map()
// numbers.map(function (value) {
//     return  value + 2;
// });
// console.log(output);

//3. filter()
// let filter = number.filter(function (value){
//     return value > 2;
// });
// console.log(filter);

//4. find()
let find = number.find(function (value) {
  return value > 2;
});
console.log(find);
