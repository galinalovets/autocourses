// // *** Задача 7 ***

// //  --- только callback

console.log('Callback - Start');
setTimeout(() => {                                //функция вызовется через минимальное время, когда будет свободна очередь (в этом примере - после блока только промисов)
console.log('Callback - SetTimeout');
}, 0);
console.log('Callback - More');                 // выполнится сразу после Callback - Start

// --- только promises (resolve + reject flow)  // блок только промисы выполняется сразу после Callback- More 

const getData = data => {
const promise1 = new Promise((resolve, reject) => {
  console.log('Promise - Preparing data ...');  // вывели после Callback - More
  const backendData = {                         // создали объект
    server: 'aws',
    port: 2000,
    status: 'working',
  };
  resolve(backendData);                         
});
return promise1;
};
const promise2 = new Promise((resolve,reject) => {
  const data = getData();
  reject(data);                                 // не выполнили, вывели ошибку из catch
})
promise2
  .then((data) => {
    data.modified = true;
    console.log('Promise - Data received', data);
  }) 
  .catch((err) => console.error('Promise - Error', err))
  .finally(() => console.log('Promise - Finally')); // сработает всегда, независимо resolve/reject

// --- комбинация callback + promise

const promise3 = new Promise((resolve, reject) => { 
  setTimeout(() => {
    console.log('Callback + Promise - Preparing data ...'); 
    const backendData = {
      server: 'aws',
      port: 2000,
      status: 'working',
    };
    resolve(backendData);
  }, 3000);
});

promise3
  .then((clientData) => console.log('Callback + Promise - Data recieved', clientData))
  .catch((err) => console.log('Callback + Promise - Error', err))
  .finally(() => console.log('Callback + Promise - Finally'));

