// *** Задача 1 ***

// Это импровизация на тему курсов вождения (совпадения с реальностью случайны) - будет использоваться в задачах 2 и 3

// *** Задача 2 ***

const person1 = {     // Объект Сюзи, пусть она будет стажером на курсах вождения, и некоторые его свойства
    userId: 1,
    userName: 'Suzy',
    userAge: 18,
    isTraining: true,
}

console.log(`Meet ${person1.userName}! ${person1.userName} is ${person1.userAge} years old.`); // представление Сюзи в консоли


if(person1.userName != null && person1.userAge >= 0 && person1.userAge < 18) { // проверка, подходит ли Сюзи по возрасту для курсов
    console.log(`Sorry, ${person1.userName}, you\'re too young for the course`);
} else if(person1.userAge >= 18 && person1.userAge < 100) {
    console.log(`Great, ${person1.userName}, you\'re old enough for the course`);
} else {
    console.log(`Ohh no ${person1.userName} Something went wrong, try again later`);
}


