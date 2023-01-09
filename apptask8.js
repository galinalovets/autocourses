// *** Задача 8 ***

const trainingAutos = ['Audi', 'Малиновая Лада', 'Toyota', 'Nissan', 'Жигули']; //массив строк
const valueLength = []; //массив количества символов в строках, чтобы найти max

trainingAutos.forEach((auto, i, trainingAutos) => {   //запустили перевод в количество символов для каждой строки в исходном массиве
    valueLength.push(trainingAutos[i].length); // перевели и добавили в отдельный массив количество символов в каждой строке
    console.log(`${auto} => ${trainingAutos[i].length}`); // сопоставили и вывели строки и количество символов (для самопроверки)
}); 
const maxValue = Math.max.apply(null, valueLength); // максимальное количество символов
const result = trainingAutos.filter(auto => auto.length == maxValue); // поиск элементов с максимальным количеством символов
console.log(`Элемент(ы) массива с максимальным количеством символов - ${result}`); // вывод элементов с максимальным количеством символов
