var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer1 = new Customer("Thomas", "Turbando");
console.log(myCustomer1.firstName + "\n" + myCustomer1.lastName);
