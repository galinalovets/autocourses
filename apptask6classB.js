class Course extends Person {
    constructor(courseID, courseName, courseLength, userID, userName) {
        super(userID, userName);
        this.courseID = courseID;
        this.courseName = courseName;
        this.courseLength = courseLength;
    }

    sayHiCourse(name) {
        console.log(`Hi ${name}! We\'re pleased to have you`);
    }

    describeCourse(name) {
        console.log(`Head\'s up ${name}, here you can read all the updates about the course`);
    }
}

const course1 = new Course(1, 'Beginner', 2, person2["userID"], person2["userName"]);
// console.log(course1);
// course1.sayHiCourse('Ben');
// course1.describeCourse('Suzy');