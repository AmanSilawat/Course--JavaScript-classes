class Square {
    constructor(_width) {
        this.width = _width;
        this.height = _width;
        this.numOfRequestsForArea = 0;
    }

    get area() {
        this.numOfRequestsForArea++;
        return this.width * this.height;
    }

    set area(area) {
        this.width = Math.sqrt(area);
        this.height = this.width;
    }
}

let square1 = new Square(4);

console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);


console.log(square1.numOfRequestsForArea);
