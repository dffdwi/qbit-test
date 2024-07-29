const fruits = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

//No. 1

console.log("NO. 1");

const fruitName = [
  ...new Set(fruits.map((fruit) => fruit.fruitName.toLowerCase())),
];

console.log(fruitName);

console.log("==========================================================");

// Pertanyaan Tambahan

const addFruit = (newFruit) => {
  fruits.push(...newFruit);
};

const newFruit = [
  { fruitId: 6, fruitName: "Sirsak", fruitType: "Nasional", stock: 100 },
  { fruitId: 6, fruitName: "Jambu", fruitType: "Nasional", stock: 50 },
];
addFruit(newFruit);

//No.2

console.log("NO.2");

const fruitBox = new Map();

fruits.forEach((fruit) => {
  const fruitName = fruit.fruitName.toLowerCase();
  const fruitType = fruit.fruitType.toLowerCase();

  if (!fruitBox.has(fruitType)) {
    fruitBox.set(fruitType, new Set());
  }

  fruitBox.get(fruitType).add(fruitName);
});

const sumBox = fruitBox.size;

console.log(`Jumlah Box : ${sumBox}`);

fruitBox.forEach((value, key) => {
  console.log(`Box ${key} : `, Array.from(value));
});

console.log("==========================================================");

//No. 3

console.log("NO. 3");

const fruitStock = new Map();

fruits.forEach((fruit) => {
  const fruitType = fruit.fruitType.toLowerCase();
  if (fruitStock.has(fruitType)) {
    fruitStock.set(fruitType, fruitStock.get(fruitType) + fruit.stock);
  } else {
    fruitStock.set(fruitType, fruit.stock);
  }
});

fruitStock.forEach((value, key) => {
  console.log(`Total stock ${key} : ${value}`);
});

console.log("==========================================================");

// No. 4
console.log("NO. 4");

console.log("Komentar:");
console.log(
  "- Terdapat beberapa 'fruitId' yang sama. 'fruitId' seharusnya menjadi identifikasi unik setiap buah."
);
console.log(
  "- Nama buah dalam data tidak konsisten dalam penulisan huruf besar dan kecil, seperti 'Apel', 'apel', dan 'KURMA'. Untuk mencegah duplikasi dan menjaga konsistensi, lebih baik menggunakan format yang seragam."
);

console.log("==========================================================");