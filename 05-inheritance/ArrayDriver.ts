import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Retangle } from "./Rectangle";

let myShape = new Shape(10,15);
let myCircle = new Circle(5, 10, 20);
let myRetangle = new Retangle(0, 0, 3, 7);

// declare an array empity
let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRetangle)

for ( let tempShape of theShapes ) {
    console.log(tempShape.getInfo());
    console.log(`The new one!`)
}