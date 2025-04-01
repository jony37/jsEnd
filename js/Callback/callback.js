//                                                             // Callback Function
// // const firsLog = () => {
// //     setTimeout( function () {
// //         console.log(1);
// //     }, 1000)
// // }

// // const secondLog = () => {
// //     console.log(2);
// // }

// // firsLog();
// // secondLog();

// // 1
// // function greeting (callback) {
// //     console.log(1);
// //     callback();
// // }

// // greeting(() => console.log(2))

// // 2
// // function greeting (callback) {
// //     console.log(1);
// //     callback();
// // };

// // function callback () {
// //     console.log(2);
// // }

// // greeting(callback)


// function greeting (callback) {
//     if (true) {
//         callback()
//     } else {
//         console.log("Callback function is not working");
//     }
// }

// greeting(() => {
//     let h1 = document.createElement('h1')
//     h1.innerHTML = "Callback function ishladi"
//     document.querySelector("body").appendChild(h1)

// })