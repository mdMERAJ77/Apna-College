console.log("start"); //synchronous code


setTimeout(function printName() { //asynchronous code
    console.log("meraj");
}, 5000);


console.log("End"); //synchronous code