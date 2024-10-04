// let firstPromise = new Promise((resolve, reject) => {
//     setTimeout(function sayMyName() {
//         console.log("my name is meraj");
//     }, 0);
// });
// let promise = new Promise((resolve, reject) => {
//     message = true;
//     if (message == true) {
//         resolve(10);
//     } else {
//         reject("Interval server Error");
//     }
// });
// promise.then((message) => {
//     console.log("solved " + message);
// }).catch((error) => {
//     console.error(error);
// }).finally((message) => {
//     console.log("run always...bcz i am finally");
// })


// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "first");
// });
// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "second")
// });
// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(reject, 4000, "third");
// });

// Promise.all([promise1, promise2, promise3])
//     .then((values) => {
//         console.log(values);
//     })
//     .catch((error) => {
//         console.error("error: " + error);
//     })


let promise =new Promise((resolve,reject)=>{
    console.log("i am promise");
})