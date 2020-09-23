class Rectangle {
    //setup your object
    constructor(_width, _height, _color) {
        console.log('the Rectangle is being created');

        this.width = _width;
        this.height = _height;
        this.color = _color;
    }

    getArea() {
        return this.width * this.height;
    }

    printDescription () {
        console.log(`Some data inside of Rectangle width: ${this.width}, height: ${this.height}, color: ${this.color} and methods getArea, printDescription.`)
    }
}

// call the constructor method
let myRectangle1 = new Rectangle(5, 3, 'blue');
let myRectangle2 = new Rectangle(10, 5, 'red');

console.log(myRectangle1.getArea());
console.log(myRectangle2.getArea());
console.log(myRectangle1.printDescription());