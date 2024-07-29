type IFruit = {
  fruitId: number;
  fruitName: string;
  fruitType: "IMPORT" | "LOCAL";
  stock: number;
};

const fruitData: IFruit[] = [
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

// No. 1
console.log("NO. 1");
const uniqueFruitNames = [
  ...new Set(fruitData.map((fruit) => fruit.fruitName.toLowerCase())),
];
console.log(uniqueFruitNames);
console.log("==========================================================");

// Pertanyaan Tambahan
const addFruits = (newFruits: IFruit[]): void => {
  newFruits.forEach((fruit) => {
    if (fruit.fruitType === "IMPORT" || fruit.fruitType === "LOCAL") {
      fruitData.push(fruit);
    } else {
      console.error(`Invalid fruit type for ${fruit.fruitName}: ${fruit.fruitType}`);
    }
  });
};

const newFruitsToAdd: IFruit[] = [
  { fruitId: 6, fruitName: "Sirsak", fruitType: "LOCAL", stock: 100 },
  { fruitId: 6, fruitName: "Jambu", fruitType: "IMPORT", stock: 50 },
];

addFruits(newFruitsToAdd);

// No. 2
console.log("NO. 2");
const fruitContainers = new Map<string, Set<string>>();

fruitData.forEach((fruit) => {
  const name = fruit.fruitName.toLowerCase();
  const type = fruit.fruitType.toLowerCase();

  if (!fruitContainers.has(type)) {
    fruitContainers.set(type, new Set());
  }

  fruitContainers.get(type)?.add(name);
});

const numberOfContainers = fruitContainers.size;
console.log(`Jumlah Box : ${numberOfContainers}`);

fruitContainers.forEach((value, key) => {
  console.log(`Box ${key} : `, Array.from(value));
});
console.log("==========================================================");

// No. 3
console.log("NO. 3");
const stockByType = new Map<string, number>();

fruitData.forEach((fruit) => {
  const type = fruit.fruitType.toLowerCase();
  if (stockByType.has(type)) {
    stockByType.set(type, (stockByType.get(type) ?? 0) + fruit.stock);
  } else {
    stockByType.set(type, fruit.stock);
  }
});

stockByType.forEach((value, key) => {
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
