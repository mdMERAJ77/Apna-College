async function getData(){
    setTimeout(()=>{console.log("hello meraj")},3000);
}
let output=getData()
console.log(output); //return promise NOTE:- async function always return promise

//fetch api
async function getAPI(){
    //let response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
   // let response2 = await fetch('https://jsonplaceholder.typicode.com/posts');
    let response3 =await fetch('https://jsonplaceholder.typicode.com/users');

    //let data1=await response1.json();
    //let data2=await response2.json();
    let data3=await response3.json();
    console.log(data3);
}getAPI();