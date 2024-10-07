// function getData(getId, getNextData){
//     setTimeout(()=>{
//         console.log("data",getId);
//         if(getNextData){
//             getNextData();
//         }
//     },4000)
// }

//callback Hell
// console.log("fetching data 1 ...")
// getData(1,()=>{
//     console.log("fetching data 2 ...");
//     getData(2, ()=>{
//         console.log("fetching data 3 ...");
//         getData(3,()=>{
//             console.log("fetching data 4 ...");
//             getData(4);
//         });
//     });
// });

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//             reject("rejected");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }
// let promise = getData(123);
// console.log(promise);

// let getData=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("inside promise");
         //resolve("success");
//         reject("network error");
//     });
// };

// let promise=getData();
// promise.then((res)=>{
//     console.log("promise fullfilled",res);
// });
// promise.catch((err)=>{
//     console.log("rejected",err);
// });


function asyncFun1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("data1 successful")
        },3000);
    });
};

function asyncFun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("data2 successful");
        },3000);
    });
}
console.log("fetching data1...");
asyncFun1().then((res)=>{
    console.log(res);
    console.log("fetching data2...");
    asyncFun2().then((res)=>{  
        console.log(res);  
    });
});