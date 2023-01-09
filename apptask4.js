// *** Задача 4 ***

const person5 = {     // Объект Дэниел и некоторые его свойства
    userId: 5,
    userName: 'Daniel',
    userAge: 35,
    isTraining: true,
}
let personProgress = 2;  // определим переменную прогресс и присвоим значение, пусть оно будет целочисленное от 0 до 4
if (personProgress >= 0 && personProgress <= 4 && Number.isInteger(personProgress)) { // проверим значение и выведем в консоль сообщение по прогрессу
switch (personProgress) {
    case 1:
     console.log(`Hey ${person5.userName} keep training!`);
     break; 
    case 2:
     console.log(`${person5.userName} is half-way through!`);
     break;
    case 3:
     console.log(`${person5.userName} is almost there`);
     break;
    case 4:
     console.log(`${person5.userName} congrats!`);
     break;
    default:
     console.log(`Let\'s start ${person5.userName}`);
}
} else {
    console.log('Invalid value, should be an integer from 0 to 4!')
}