
class Person {
    _id: number;
    _firstName: string;
    _lasstName: string;
    _birthday: string;
    constructor(id:number, firstName: string, lasstName: string, birthday: string) {
        this._id = id;
        this._firstName = firstName;
        this._lasstName = lasstName;
        this._birthday = birthday;
    }
}

export default Person