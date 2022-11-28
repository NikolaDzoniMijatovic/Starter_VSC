let colors = ["white", "yellow", "green"];  // Array
console.log(colors);
console.log(colors[2]);

let mix = ["color", 10, true, 15.99];
console.log(typeof mix, mix);
console.log(typeof mix[0], mix[0]);
console.log(typeof mix[1], mix[1]);
console.log(typeof mix[2], mix[2]);
console.log(typeof mix[3], mix[3]);

let newArray = [];
console.log(newArray);

newArray[0] = "Nova Stavka";
console.log(newArray);

newArray[0] = "Nova Stavka izmenjena";
console.log(newArray);

newArray.push("Jos jedna stavka");  // dodaje novu stavku u niz
console.log(newArray);

delete newArray[0];     // brise podatak iz niza
console.log(newArray);

console.log(newArray.length);

// Array push() and pop() and shift() and unshift()
// push() i pop() rade sa krajem niza, a shift() i unshift() rade sa pocetkom niza

let fruits = [];
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Orange");
console.log(fruits);

let lastFruit = fruits.pop();   // uzima poslednji element iz niza i "izbacuje ga"
console.log(lastFruit);
console.log(fruits);

let firstFruit = fruits.shift();  // uzima prvi element iz niza i "izbacuje ga"
console.log(firstFruit);
console.log(fruits);

fruits.unshift("Strawberry");
fruits.unshift("Lemon");  // ubacuje na prvo mesto u nizu
fruits.unshift("Orange");
fruits.unshift("Lime");

console.log(fruits);

// splice() and slice()
// splice() ubacuje element negde u nizu
// slice() "sece" odredjeni deo niza

fruits.splice(4, 0, "Pineapple", "Kiwi");  // na prvom mestu ubacujemo Ananas(1), necemo da brisemo nijedan element(0)
console.log(fruits);

fruits.splice(4, 1);
console.log(fruits);

fruits.slice();
console.log(fruits);

let citrus = fruits.slice(0, 3);  // uzece elemente iz niza od nultog do treceg indeksa
console.log(citrus);
console.log(fruits);

let multiDimensionalArray = [
    [
        1, 2, 3
    ],
    [
        "a", "b", "c" 
    ],
    [
        [1, 2, 3]
        [4, 5, 6]
    ]
];

console.log(multiDimensionalArray[0][1]);   // nula je indeks niza - jedinica je vrednost unutar nultog indeksa
console.log(multiDimensionalArray[0]);
multiDimensionalArray[0].push(4);
console.log(multiDimensionalArray[0]);




console.log("SIZE");
console.log(fruits.length, fruits);
fruits[400] = "Mango";

for(let c = 0; c < fruits.length; c++) {
    console.log(fruits[c]);
}

let fruits2 = ['Pineapple', 'Apple', 'Cherry'];

let allFruits = fruits.concat(fruits2);
console.log(allFruits);

allFruits.sort();  // slaze vrednosti niza po abecednom redu
console.log(allFruits);

allFruits.reverse();  // slaze vrednosti niza u obrnutom redosledu
console.log(allFruits);

function swapPlaces(inputArray, place1, place2) {
    if(((place1 < 0) || (place1 >= allFruits.length) ||
        (place2 < 0) || (place2 >= allFruits.length))) {
            return inputArray;
        }

    let interimValue;
    interimValue = inputArray[1];
    inputArray[place1] = inputArray[place2];
    inputArray[place2] = interimValue;

    return inputArray;
}

let swappedPlaces = swapPlaces(allFruits, 1, 2);
console.log(swappedPlaces);