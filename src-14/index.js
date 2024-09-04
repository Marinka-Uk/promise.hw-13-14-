// Завдання 1

// const args = [
//     {
//         value: 'Hello',
//         time: 1000
//     },
//     {
//         value: 'how are you?',
//         time: 5000
//     },
//     {
//         value: 'bye',
//         time: 3000
//     }
// ]

// const promises = args.map(arg => delayedPromise(arg.value, arg.time))
// console.log(promises);
    
// Promise.all(promises).then(console.log)
// function delayedPromise(value, ms) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(value)
            
//         }, ms)
//     })
// }
// delayedPromise('Hi', 2000)


// Завдання 2

const promises = [
  arrDelay('Promise 1'),
  arrDelay('Promise 2'),
  arrDelay('Promise 3'),
  arrDelay('Promise 4'),
  arrDelay('Promise 5')
];

Promise.race(promises)
  .then(fastestResult => {
    console.log('Найшвидший результат:');
  })
  .catch(error => {
    console.error(`Помилка: ${error}`);
  });
const arrDelay = value => {
  const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
};
