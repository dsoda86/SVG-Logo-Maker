class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
};

class Circle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40"  fill="${answers.shapeColor}" />`;
    }
};


class Triangle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0, 200 100, 0 200, 200" fill="${answers.shapeColor}" />`;
    }
};

class Square extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="20" width="150" height="150" fill="${answers.shapeColor} />`;
    }
};

module.exports = { Circle, Triangle, Square};