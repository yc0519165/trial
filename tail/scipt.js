

// const isPrime = (num) => {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// };

// console.log(isPrime(3))

// const isOdd = (num) => {
//   if (num % 2 == 0) {
//     return console.log('is even')
//   } else {
//     return console.log('is not even')
//   }
// }
// console.log(isOdd(2))

// const isEven = (num) => {
//   if (num % 2 !== 0) {
//     return console.log('is Odd');
//   } else {
//     return console.log('is not odd')
//   }
// }
// isEven(2)

// console.log('first loop')

// setTimeout(() => {
//   console.log('second loop')
// })

// console.log('third loop')

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);

console.log('My car is', myCar.age(), 'Years Old')
