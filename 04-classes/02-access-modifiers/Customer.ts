class CustomerWithAccessors {
    private _firstName: string;
    private _lastName: string;
    
    get lastName(): string {
        return this._lastName;
    }
    
    set lastName(value: string) {
        this._lastName = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(v: string) {
        this._firstName = v;
    }
}

let myCustomer2 = new CustomerWithAccessors();

myCustomer2.firstName = `Thomas`;
myCustomer2.lastName = "Turbando";

console.log(myCustomer2.firstName + " " + myCustomer2.lastName );