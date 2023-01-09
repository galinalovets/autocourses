// *** Задача 6 ***

class Person {
    constructor (userID, userName, userAge, isTraining) {
        this.userID = userID;
        this.userName = userName;
        this.userAge = userAge;
        this.isTraining = isTraining;
    }

    sayHi(name) {
        console.log(`Hi, ${name}! I\'m ${this.userName}`);
    }

    applyForCourse(courseNumber) {
        console.log(`Where can I get my schedule for the course, ${courseNumber}?`);
    }
        
}
const person2 = new Person(2, 'Ben', 32, false);
// console.log(person2);
// person2.sayHi('Suzy');
// const person3 = new Person(3, 'Doug', 27, true);
// console.log(person3);
// person3.applyForCourse('Doug');
