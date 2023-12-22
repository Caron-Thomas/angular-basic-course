class Customer {
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName  = theLast;
    }

}

let myCustomer1 = new Customer(`Thomas`, "Turbando" );

console.log(myCustomer1.firstName + "\n" + myCustomer1.lastName );