console.log("FOR LOOP");
for (let i = 0; i < 11; i++) {
    console.log(i);
}

console.log("WHILE LOOP");

noInput = false;  // da bi se izvrsila petlja noInput mora da bude true
let a = 0;
while(noInput) {
    console.log(a);
    noInput = waitForAPIResponse(a);
    a++;
}

function waitForAPIResponse(a) {
    return a < 11;
}

console.log("FOR IN LOOP");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let index in numbers) {
    console.log(numbers[index]);
}

let person = {firstname: "John", lastname: "Doe", age: 30};

for(let property in person) {
    console.log(property, person[property]);

    if(property == "age") {
        if (person[property] < 18) {
            console.log("Ne moze da glasa");
        } else {
            console.log("Moze da glasa");
        }
    }
}