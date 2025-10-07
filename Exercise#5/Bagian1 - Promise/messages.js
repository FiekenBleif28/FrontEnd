//Bagian1 - Promise

import helloWorld from "./helloWorld.js";

const messages = async () => {
  const msg = await helloWorld();
  console.log(msg);
};

messages();

//Jawaban Pertanyaan:
//Penggunaan await diperlukan agar hasil dari Promise benar-benar dapat disimpan ke dalam variabel.
//Jika await dihilangkan, nilai yang ditampilkan hanyalah objek Promise yang belum selesai.
//Export dan import digunakan untuk memisahkan kode ke dalam modul sehingga lebih terstruktur, mudah dipelihara, dan dapat digunakan kembali pada file lain.
