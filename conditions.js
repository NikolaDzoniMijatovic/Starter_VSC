// if - else - else if
// uslovno grananje - uslovno izvrsavanje programa

let x = 5;

if (x == 5) {
    console.log("X je 5");
} else if (x < 5){
    console.log("X je manje od 5")
} else {
    console.log("X vece od 5");
}

switch(x) {
    case 0:
    case 1:
        console.log("X < 2");
        break;                   // breakom prekidamo ciklus izvrsavanja koda
    case 2:
        console.log("X = 2");
        break;
    case 3:
    case 4:
        default:
            console.log("X > 2");             
}

console.log("STRICT COMPARISON");
let a = "8";
if(a == 8) {
    console.log("Vrednost a = 8");
}

if(a === 8) {
    console.log("Vrednost a = '8'");
}