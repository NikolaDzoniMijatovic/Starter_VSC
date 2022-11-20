/*
JS OPERATORS
*/

// Assignment operator (=)

let a = 1;
let b = 2;
console.log(a, b);

// Adding operator (+)

let c = a + b;
console.log(c);

// Multiplication operator (*)

let d = a * b;
console.log(d);

// Division operator (/)

let e = b / a;
console.log(e);

// Substraction operator (-)

let f = a - b;
console.log(f);

// Exponentation operator(stepenovanje) (**)

c = 5 ** b;
console.log(c);

// Modulus (vraca ostatak) (%)

c = 4 % 2;
console.log(c);

// Increment operator (++)

let i = 1;
console.log(i); 
i++;
console.log(i);
++i;
console.log(i);

let j = 1;
console.log('j = ' + j);
let k = j++;
console.log('k = ' + k);

//i++
//console.log(i); i = i + 1;
//++i
//i = i + 1; console.log(i);

// Decrement operator (--)

console.log('Decrement operator');
i = 10;
console.log(i);
console.log(i--);
console.log(--i);

// Skracivanje izraza
console.log('Assignment operators');
let m = 10;
m += 2; // m = m + 2;
console.log(m);
m -= 2; // m = m - 2;
console.log(m);
m **= b; // m = m ** b;
console.log(m);

// Strings

let s = "Ovo je string";
let t = ' I ovo je string';
let razmak = " ";
console.log(s + razmak + t);
console.log("+ with numbers and strings");
console.log('"5" + 5 =', 5 + 5); // na string 5 dodaje broj 5 pa je rezultat 55
console.log('"Abc" + 5 =', "Abc" + 5);
console.log('5 + "5" =', 5 + "5");
console.log('5 + 2 + 5 =', 5 + 2 + "5");


// Logical operators
console.log("Logical operators");

console.log("Logical AND -- &&");
let isItTrue = true && false;  // oba clana moraju da budu tacna
console.log("T && F =", isItTrue);

console.log("Logical OR - ||")
isItTrue = true || false;  // dovoljno je da samo jedan clan bude false da bi rezultat bio false
console.log("T || F =", isItTrue);

console.log("Logical NOT - !");
isItTrue = !false;  // rezultat ce biti true zato sto negiramo da je false
console.log("!T =", isItTrue);

console.log("Operators precedance");
let a1 = 10 + 20 * 3;
console.log(a1);
let a2 = (10 + 20) * 3;
console.log(a2);

