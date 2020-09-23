// Parent and Child Class
class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    describe() {
        console.log(`I am${this.name} and I am ${this.age} years old`);
    }
}

class Programmers extends Person {
    constructor(_name, _age, _yearOfExperience) {
        super(_name, _age);

        //Custom behaviour
        this._yearOfExperience = _yearOfExperience;
    }

    code() {
        console.log(`${this.name} is coding`);
    }
}

const programmers = [
    new Programmers('Dom', 56, 12),
    new Programmers('Jeff', 24, 4),
];

function developSoftware(programmers) {
    // Develop Software
    for (let programmer of programmers) {
        programmer.code();
    }
}

console.log(programmers);
developSoftware(programmers);
