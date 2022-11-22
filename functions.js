// Metode - funkcije - grupisane instrukcije po potrebi

function myAddFunction(number1, number2) {
    return number1 + number2;
};

function functionWithNoInputParameters() {
    return "Neki String";
};

let result = myAddFunction(5, 8);
console.log(result);
console.log(functionWithNoInputParameters());

console.log(myAddFunction(
    myAddFunction(2, 2),   // funkcija kao parametar tj vrednost funkcije kao parametar
    myAddFunction(3, 3)
));

let num1 = myAddFunction(2, 2);
let num2 = myAddFunction(3, 3);
console.log(myAddFunction(num1, num2));

nil = () => {};

function fahrenheitToCelsius(fahrenheit) {
    let temp = (5 / 9);  // lokalna promenljiva i njen opseg je unutar funkcije
    return temp * (fahrenheit - 32);
};

console.log("100F = " + fahrenheitToCelsius(100) + "C");

console.log("80F = " + ((5/9) * (80 - 32)) + "C");  // los izraz za izracunavanje celzijusa

