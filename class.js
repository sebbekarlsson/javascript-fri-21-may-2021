class Person {
    // klassens globala scope
    // har finns "this" by default.
    // som referear till instansen av klassen sjalv.


    constructor(firstname, lastname) {
        // lokalt scope
        this.firstname = firstname;
        this.lastname = lastname;
    }

    sayYourName() {
        // lokalt scope
        console.log(this.firstname);
    }

    whoAreYou() {
        // lokalt scope
        return this;
    }
}


const myPerson = new Person("John", "Doe");

myPerson.sayYourName();