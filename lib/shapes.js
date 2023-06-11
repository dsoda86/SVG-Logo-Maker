class Shape {
    constructor() {
        this.color = "";
    }
    setColor(colorChoice) {
        this.color = colorChoice;
    }
};

class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="40"  fill="${answers.shapeColor}" />`;
    }
};


class Triangle extends Shape {
    render() {
        return `<polygon points="0, 200 100, 0 200, 200" fill="${answers.shapeColor}" />`;
    }
};

class Square extends Shape {
    render() {
        return `<rect x="50" y="20" width="150" height="150" fill="${answers.shapeColor} />`;
    }
};

module.exports = { Circle, Triangle, Square};