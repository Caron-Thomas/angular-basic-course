var CustomerWithAccessors = /** @class */ (function () {
    function CustomerWithAccessors(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
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
var myCustomer2 = new CustomerWithAccessors("Thomas", "Good");
console.log(myCustomer2.firstName + " " + myCustomer2.lastName);
