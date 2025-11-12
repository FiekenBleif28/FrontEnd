//Bagian1 - Promise

const helloWorld = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
};

export default helloWorld;

//Jawaban Pertanyaan:
//Penggunaan await diperlukan agar hasil dari Promise benar-benar dapat disimpan ke dalam variabel.
//Jika await dihilangkan, nilai yang ditampilkan hanyalah objek Promise yang belum selesai.
//Export dan import digunakan untuk memisahkan kode ke dalam modul sehingga lebih terstruktur, mudah dipelihara, dan dapat digunakan kembali pada file lain.
