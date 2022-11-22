let car = {    // objekat
    manufacturer: "Toyota",  // property objekata
    model: "Corrola",
    year: 2017,
    engines: [1333, 1667],
    makeAndModel: function() {
        return this.manufacturer + " " + this.model;  // kada se koristi this to predstavlja ceo objekat
    }
}

car.year = 2022;

console.log(car.model, car.year);  // pozivanje propertija pomocu tacke
console.log(car.engines[1]);


let person = {
    firstName: "Petar",
    lastName: "Petrov",
    age: 25,
    imeIPrezime: function() {
        return this.firstName + " " + this.lastName;
    },
    ostari: function() {
        this.age = this.age + brojGodina;
    }
}

console.log(person.imeIPrezime());
console.log(person.firstName + " " + person.lastName);
person.ostari(2);
person.age(person.age);


// niz objekata
let people = [
    {
        ime: "Petar",
        prezime: "Petrov"
    },
    {
        ime: "Jovan",
        prezime: "Jovanov"
    }
];

console.log(people[1].ime);