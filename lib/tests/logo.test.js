const { Circle, Triangle, Square} = require("./lib/shapes")

describe("Circle", () => { 
    it ("should return a circle logo with user selected shape color, text, and text color", () => {
        const circle = new Circle("green", "GPG", "gold");
        expect(circle.render()).toEqual(
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40"  fill="green" />
            <text x="50" y="40" font-size="25" text-anchor="middle" fill="gold">GPG</text></svg>`
        );
    });
});