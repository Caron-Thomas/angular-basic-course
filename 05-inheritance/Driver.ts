import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Retangle } from "./Rectangle";

let myShape = new Shape(10,15);
console.log(myShape);

let myCircle = new Circle(5, 10, 20);
console.log(myCircle);


let myRetangle = new Retangle(0, 0, 3, 7);
console.log(myRetangle);