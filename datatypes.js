let a; // a is undefined
console.log(a);
a = 1000000000; // a is number
console.log(a);
a = 456e5; // a is number
console.log(a);
a = 456e-5; // a is number
console.log(a);
a = 'Tekst'; // a is string
console.log(a);
a = true; // a is boolean
console.log(a);

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

newArray.push("Jos jedna stavka");
console.log(newArray);


