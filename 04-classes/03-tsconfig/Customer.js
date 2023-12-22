var CustomerWithAccessors = /** @class */ (function () {
    function CustomerWithAccessors() {
    }
    Object.defineProperty(CustomerWithAccessors.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerWithAccessors.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (v) {
            this._firstName = v;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerWithAccessors;
}());
var myCustomer2 = new CustomerWithAccessors();
myCustomer2.firstName = "Thomas";
myCustomer2.lastName = "Turbando";
console.log(myCustomer2.firstName + " " + myCustomer2.lastName);
