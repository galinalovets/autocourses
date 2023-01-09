// ***Задача 7 - async/await, promises***

// --- только async/await

async function getValues() {
  console.log('Async/await - Processing...'); //сразу выводится в консоль
  let url =
    'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
  let response = await fetch(url);
  let commits = await response.json(); // читаем ответ в формате JSON
  console.log('Async/await - ', commits); // выводится в консоль, как только отработает fetch и responce.json
  console.log(`Async/await - Values prepared`); // выводится в консоль сразу после пред. строки
}
getValues();

// --- комбинация promise + async/await

function getDataAsync() {
  const promise1 = new Promise((resolve, reject) => {
    console.log('Promises + Async/await - Processing...');
    console.log(`Promises + Async/await - Values prepared`);
    let data = 'prepared values';
    resolve(data);
  });
  promise1
    .then((data) => {
      console.log('Promises + Async/await - Data received -', data);
      return data;
    })
    .catch((err) => console.error('Promises + Async/await - Error', err));
}

async function showLog() {
  console.log('Promises + Async/await - Middle');
}

async function waitTill() {
  console.log('Promises + Async/await - Start');
  let logs = await showLog();
  let values = await getDataAsync();
  console.log('Promises + Async/await - Finish');
}

waitTill();
