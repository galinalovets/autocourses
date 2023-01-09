// *** Задача 5 ***

let personBonus = 'bonus'; //присвоили значение - должно быть число больше или равно 0
function checkScore() {
if (isNaN(personBonus) || personBonus < 0) {
    throw {message: 'Invalid value, not a number!'}; //ошибка
}
return personBonus;
}
let newPersonBonus;
try {
    newPersonBonus = checkScore();
} catch (error) {
    console.log(error); //покажет ошибку, если она есть
    newPersonBonus = 0;
    console.log(`The value "${personBonus}" is invalid for the matter, default value was used`); //восстановили дефолтное значение, чтобы код дальше выполнялся
} finally {
    console.log(newPersonBonus); //выполнится всегда; есть ошибка - покажет дефолтное значение, которое восстановили, нет ошибки - покажет валидное значение
}