"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var myCustomer2 = new Customer_1.CustomerWithAccessors("Thomas", "Good");
console.log(myCustomer2.firstName + " " + myCustomer2.lastName);
