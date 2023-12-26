export class CustomerWithAccessors {

    constructor (     
    private _firstName: string,
    private _lastName: string 
                 ) {  }
    
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
