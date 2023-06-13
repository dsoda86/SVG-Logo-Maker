const { Circle, Triangle, Square} = require("../shapes.js")

describe("Circle", () => { 
    it ("should return a circle logo with user selected shape color, text, and text color", () => {
        const circle = new Circle("green", "GPG", "gold");
        const expected = `
          <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="green" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="gold">GPG</text>
          </svg>
        `;
        const received = circle.render().replace(/\s/g, "");

        expect(received).toEqual(expected.replace(/\s/g, ""));
    });
});

describe("Triangle", () => {
    it ("should return a square logo with user selected shape color, text, and text color", () => {
        const triangle = new Triangle("darkblue", "MB", "darkgoldenrod");
        const expected = `
          <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 25 200, 200 0, 200" fill="darkblue" />
            <text x="100" y="165" font-size="60" text-anchor="middle" fill="darkgoldenrod">MB</text>
          </svg>
        `;
        const received = triangle.render().replace(/\s/g, "");

        expect(received).toEqual(expected.replace(/\s/g, ""));
    });
});

describe("Square", () => {
    it ("should return a square logo with user selected shape color, text, and text color", () => {
        const square = new Square("darkgreen", "FTD", "indigo");
        const expected = `
          <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="darkgreen" />
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="indigo">FTD</text>
          </svg>
        `;
        const received = square.render().replace(/\s/g, "");

        expect(received).toEqual(expected.replace(/\s/g, ""));
    });
});
  