function person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

    this.sayYourName = function() {
        console.log(this.firstname);
    }
}

const myPerson = new person("John", "Doe");

myPerson.sayYourName();

const otherPerson = new person("Sarah", "Doe");

otherPerson.sayYourName();