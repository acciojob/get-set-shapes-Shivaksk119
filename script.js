//complete this code
class Rectangle {
	constructor(width, height) {
		this.width= width;
		this.height = height;
	}
	width(){
		return this.width;
	}
	height() {
		return this.height;
	}
	area() {
		return this.width*this.height;
	}
}

class Square extends Rectangle {
	constructor(width) {
		super(width, width);
	}
	perimeter() {
		return 4*this.width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
