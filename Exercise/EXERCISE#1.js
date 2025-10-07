// IIFE (Immediately Invoked Function Expression) untuk menghitung BMI
(function (berat, tinggi) {
  function calculateBMI(berat, tinggi) {
    return berat / (tinggi * tinggi);
  }

  let bmi = calculateBMI(berat, tinggi);
  let kategori = bmi > 25 ? "Kelebihan berat" : "Berat anda normal";
  console.log(kategori);
})(72, 1.68);

// Callback untuk menghitung BMI
function calculateBMI(berat, tinggi, callback) {
  let bmi = berat / (tinggi * tinggi);
  callback(bmi);
}

calculateBMI(60, 1.75, function (bmi) {
  let kategori = bmi > 25 ? "Kelebihan berat" : "Berat anda normal";
  console.log(kategori);
});
