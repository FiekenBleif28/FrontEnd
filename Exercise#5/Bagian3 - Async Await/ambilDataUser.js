//Bagian3 - Async Await
//ambilDataUser.js (versi async/await)

const ambilDataUser = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    users.forEach(({ name }) => {
      console.log(`Nama Lengkap: ${name}`);
    });
  } catch (error) {
    console.error(`Terjadi error: ${error}`);
  }
};

export default ambilDataUser;

//Jawaban Pertanyaan:
//Pendekatan Promise chaining dengan then cenderung menghasilkan kode yang lebih panjang dan bertingkat.
//Sebaliknya, penggunaan async/await membuat kode lebih ringkas, mudah dibaca, serta memungkinkan penanganan error yang lebih jelas melalui blok try...catch.
