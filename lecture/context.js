const { getNameForPhonebook } = require('./context2');
class Person {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

const person = new Person('Esteban', 'Trevino');

console.log('function call', getNameForPhonebook.apply(person));
