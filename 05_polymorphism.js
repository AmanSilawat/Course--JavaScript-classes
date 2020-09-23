// polymorphism is the act of redefining a method inside a derived child class of a parent

class Aniaml {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Generic Animal Sound!!");
    }
}

class Dog extends Aniaml {
    constructor(name) {
        super(name);
    }

    makeSound() {
        super.makeSound();
        console.log('Woof! Woof!');
    }
}

const a1 = new Aniaml('Dom');
const a2 = new Dog('Jeff');
a1.makeSound();
a2.makeSound();