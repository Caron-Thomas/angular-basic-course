import { CustomerWithAccessors} from "./Customer"

let myCustomer2 = new CustomerWithAccessors(`Thomas`, `Good`);

console.log(myCustomer2.firstName + " " + myCustomer2.lastName );