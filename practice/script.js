// // GET

// const getRequest = async () => {
//   try {
//     const res = await fetch('https://dummyjson.com/products/1')
//     const data = await res.json()
//     console.log(data)
//   } catch (error) {
//    console.log(error)
//   }
// }
// document.getElementById('get').addEventListener('click', () => {
//   getRequest()
// })
                                 
// //POST

// const postRequest = async () => {
//   try {
//     const res = await fetch('https://dummyjson.com/products/add', {
//       method: 'POST',
//       body: JSON.stringify({
//         title: "DNF Pencil",
//       })
//     })
//     const data = await res.json()
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// document.getElementById('post').addEventListener('click', () => {
//   postRequest()
// })

// // PUT

// const putRequest = async () => {
//   try {
//     const res = await fetch('https://dummyjson.com/todos/2', {
//       method: 'PUT',
//       body: JSON.stringify({
//         complete:true
//       })
//     })
//     const data = await res.json()
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// document.getElementById('put').addEventListener('click', () => {
//   putRequest()
// })

// //DELETE

// const deleteRequest = async () => {
//   try {
//     const res = await fetch('https://dummyjson.com/todos/3', {
//       method: 'DELETE',
//     })
//     const data = await res.json()
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// document.getElementById('delete').addEventListener('click', () => [
//   deleteRequest()
// // ])


// const isOdd = (num) => {
//   if (num % 2 !== 0) {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(isOdd(5))

// const isEven = (num) => {
//   if (num % 2 === 0) {
//     return true
//   }else{
//     return false;
//   }
// }
// console.log(isEven(6))

// const isPrime = (num) => {
//   if (num < 2) return false
//   for (let i = 2; i <= Math.sqrt(num); i++){
//     if (num % i === 0) {
//       return false
//     }
//   }
//   return true
// }
// console.log(isPrime(5))
// 2, 3, 5, 7, 11, 13,

// class Car {
//   constructor(name, model) {
//     this.name = name
//     this.model = model
//   }
// }
// const theCar = new Car('Ford', 2025)
// console.log(theCar)

