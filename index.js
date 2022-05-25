// TODO: Buatlah data dari kedua user di sini
const nama = ["Monica", "Wendy"];
const jk = ["Female", "Male"];
const usia = [17, 23];
const email = ["monica@dingdong.com", "wendy@dingdong.com"];
const color1 = new Set(["Yellow", "Pink", "White", "Purple"]);
const color2 = new Set(["Blue", "Black", "Grey"]);
const peliharaan = ["Yes", "No"];
const pendidikan1 = new Map([
  [1, { name: "SD 01", city: "Jakarta", graduate: 2016 }],
  [2, { name: "SMP 02", city: "Jakarta", graduate: 2019 }],
  [3, { name: "SMA 03", city: "Tangerang" }],
]);
const pendidikan2 = new Map([
  [1, { name: "SD 02", city: "Jakarta", graduate: 2010 }],
  [2, { name: "SMP 03", city: "Bogor", graduate: 2013 }],
  [3, { name: "SMA 01", city: "Surabaya", graduate: 2016 }],
  [4, { name: "Universitas Maju", city: "Tangerang" }],
]);
// restorant favorit
const restaurant1 = new Set([
  "Bento",
  "Sushi",
  "Pancake",
  "Eggy",
  "Tempura",
  "Bento",
  "Eggy",
  "Padang",
  "Tteok",
  "Sushi",
  "Sush",
]);
const restaurant2 = new Set([
  "Tempura",
  "Bento",
  "Sushi",
  "Pancake",
  "Padang",
  "Katsu",
  "Geprek",
  "Pancake",
  "Eggy",
]);
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
  name: nama[0],
  gender: jk[0],
  age: usia[0],
  email: email[0],
  favoriteColor: color1,
  isHavePet: peliharaan[0],
  education: pendidikan1,
  favoriteRestaurant: restaurant1,
};
const secondUser = {
  name: nama[1],
  gender: jk[1],
  age: usia[1],
  email: email[1],
  favoriteColor: color2,
  isHavePet: peliharaan[1],
  education: pendidikan2,
  favoriteRestaurant: restaurant2,
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser, secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
