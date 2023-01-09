// *** Задача 9 ***

const citiesVisited = ['London', 'Paris', 'Moscow']; // "Гуси"
const citiesRequired = ['Minsk', 'Moscow', 'Berlin', 'Toronto', 'Paris', 'Moscow']; // исходный массив
const citiesLeft = citiesRequired.filter((city) => !citiesVisited.includes(city, 0)); // новый массив, в который не включили значения из "гусей"
console.log(citiesLeft); // вывели в консоль
