// OBJECTLAR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const person = {
//     name: "Jony",
//     age: 17,
//     job: "Full stack developer and Treydir",
//     hobbies: {
//         sport: "CR7",
//         games: "Pubg"
//     },
// sayHello: function () {
//     console.log(`Hello ${this.name}`);
// }
// }

// person.sayHello()

// console.log(Object.keys(person).length);

// // for in - faqat objectlar uchun ishlatamiz
// // for of - faqat array lar uchun ishlatamiz

// for (let key in person) {
//     if (typeof person[key] === 'object') {
//         for (let i in person[key]) {
//             console.log(`Proporty: ${i}, Value: ${person[key][i]}`);
//         }
//     } else {
//         console.log(`Proporty: ${key}, Value: ${person[key]}`);
//     }
// }

// destruktizatsiya!!!!

// const person = {
//     name: "Jony",
//     age: 17,
//     job: "Full stack developer and Treydir",
//     hobbies: {
//         sport: "CR7",
//         games: "Pubg"
//     },
//     sayHello: function () {
//         console.log(`Hello ${this.name}`);
//     }
// }

// const {name, age, job, hobbies: {games, sport}, sayHello} = person
// console.log(games);
