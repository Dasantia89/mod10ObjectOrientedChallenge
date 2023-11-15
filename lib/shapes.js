class Shape {
    constructor(shapeFill, text, txtFill) {
        this.shapeFill = shapeFill;
        this.text = text;
        this.txtFill = txtFill;
        this.ver = '1.1';
        this.width = '300';
        this.height = '200';
        this.xmlns = 'http://www.w3.org/2000/svg';
    }
};

class Triangle extends Shape {
    constructor(shapeFill, text, txtFill) {
        super(shapeFill, text,txtFill);
        this.points = "100 50, 200 200, 0 200";
    }

}
class Circle extends Shape {
    constructor(shapeFill, text, txtFill) {
    super(shapeFill, text,txtFill);
    this.radius = '80';
    this.cx = '150';
    this.cy = '100';
    }

}

class Square extends Shape {
    constructor(shapeFill, text, txtFill) {
    super(shapeFill, text,txtFill);
    this.x = '50';
    this.y = '50';
    this.w = '200';
    this.h = '200';
    }

}

module.exports = { Shape, Triangle, Circle, Square};