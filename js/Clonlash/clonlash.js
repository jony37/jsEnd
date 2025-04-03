
// Yuzaki clonlash
// let a = 10;
// let b = a;

// b = b + 10

// console.log(a);
// console.log(b);

// // Object
// const person = {
//   name: "Jony",
//   age: 22,
//   hobbies: {
//     games: "Ufs",
//     sport: "Football",
//   },
// };

// #1. Iteratsiya
// function copyObj (obj) {
//     const cloneObj = {};

//     for (let key in obj) {
//         cloneObj[key] = obj[key]
//     }

//     return cloneObj
// }

// const secondPerson = copyObj(person)

// // const secondPerson = person;

// secondPerson.name = "Samar";
// secondPerson.age = 18;
// secondPerson.hobbies.games = 'blur'

// console.log(person);
// console.log(secondPerson);

// #2. Object assign
// const secondPerson = Object.assign({job: "Full stack developer"}, person)
// secondPerson.name = "Samar";
// secondPerson.age = 18;

// console.log(person);
// console.log(secondPerson);

// #3. Spread operatori
// const secondPerson = {... person}

// secondPerson.name = "Samar";
// secondPerson.age = 18;

// console.log(person);
// console.log(secondPerson);

//                          Array clonlash                             //

// const cars = ["BMW", "Audi", "Hyundai"];

// // #1. Slice methodi yordamida
// // const clone = cars.slice();
// // console.log(clone);

// // #2. Spread operatori
// // const clone = [... cars]
// // console.log(clone);

// // Function Spread

// function log(a, b, c) {
//   console.log("First log:", a);
//   console.log("Second log:", b);
//   console.log("Thirds log:", c);
// }

// const arr = [4, 5, 6];

// log(... arr)