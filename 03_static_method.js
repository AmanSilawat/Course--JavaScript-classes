class Square {
    constructor(_width) {
        this.width = _width;
        this.height = _width;
    }

    normalFun(){
        return 'hello';
    }

    static equals(a, b) {
        return a.width * a.height === b.width * b.height;
    }

    static isValidDimenstions(width, height) {
        return width === height;
    }
}

let square1 = new Square(8);
let square2 = new Square(8);

// console.log(Square.equals(square1, square2)); // check equality

console.log(Square.isValidDimenstions(7, 6));


// Static Method: like are helper function.
// Static Method call directly class name not a instance of class.