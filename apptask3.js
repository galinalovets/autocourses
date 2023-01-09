// *** Задача 3 ***

const person4 = {     // Объект Дэн, составим упрощенное расписание курса с ним в качестве стажера
    userId: 4,
    userName: 'Dan',
    userAge: 25,
    isTraining: true,
}
const week = ['Mon','Wed','Fri']; // дни в которые проводятся занятия
let personScore = 0; //переменная показывает, сколько пройдено этапов и сколько соответственно баллов получено 

function addScore() { // фукция добавляет балл после каждого пройденного этапа
    personScore++;
}

console.log(`Here is a schedule for you`);

while (personScore <= 3) {    // принимаем, что всего этапов 4
    
    for (let courseNumber = 1; courseNumber < 3; courseNumber++) { // каждый этап - 2 недели
        console.log(`Course #${personScore + 1}`) // выводим номер этапа
        console.log(`Week #${courseNumber}`); // выводим номер недели
        for (const userDay of week) {
        console.log(userDay); // выводим дни занятий
            for (const key in person4) {
                console.log(`${key} => ${person4[key]}`); // выводим инфу о стажере
            }
        }
        addScore(); // добавляем балл при переходе на след этап
        console.log(`Training course score - ${personScore} points`); // выводим баллы
    }
}
