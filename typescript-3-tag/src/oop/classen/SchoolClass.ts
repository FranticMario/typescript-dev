import Person from "./Person";


class SchoolClass {
    _name: string;
    _id: number;
    _endDate?: string;
    _arrPersonen?: Person[]
    constructor(name:string, id: number, arrPersonen?: Person[]) {
        this._name = name;
        this._id = id;
        this._arrPersonen = arrPersonen;
        console.log("School class creation successful")
    }


    setPersonen(person:Person) {
        this._arrPersonen?.push(person)
    }
}















export default SchoolClass