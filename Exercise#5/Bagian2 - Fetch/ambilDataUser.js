//Bagian2 - Fetch

const ambilDataUser = () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      users.forEach(({ username, email }) => {
        console.log(`Username: ${username}, Email: ${email}`);
      });
    })
    .catch((error) => {
      console.error(`Terjadi error: ${error}`);
    });
};

export default ambilDataUser;

//Jawaban Pertanyaan:
//Method .json() digunakan untuk mengubah hasil respons dari fetch yang masih berupa data mentah menjadi objek JavaScript yang dapat diolah lebih lanjut.
//Apabila API gagal merespons, penanganan error dapat dilakukan menggunakan catch pada Promise chaining atau try...catch pada async/await agar program tetap berjalan dengan baik.
