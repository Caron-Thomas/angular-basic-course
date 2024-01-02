"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCircle = new Circle_1.Circle(5, 10, 20);
let myRetangle = new Rectangle_1.Retangle(0, 0, 3, 7);
// declare an array empity
let theShapes = [];
theShapes.push(myCircle);
theShapes.push(myRetangle);
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}
