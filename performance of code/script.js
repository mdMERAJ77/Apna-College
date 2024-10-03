// code 1
// let t1 = performance.now();
// for (let i = 1; i < 100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "Number is " + i;
//     document.body.appendChild(para);
// }
// let t2 = performance.now();
// console.log(`performance timing is ${t2 - t1}`);

// code 2
let t3 = performance.now();
let myDiv = document.createElement('div');
for (let i = 1; i < 100; i++) {
    let para = document.createElement('p');
    para.textContent = "Number is" + i;
    myDiv.appendChild(para);
}
document.body.appendChild(myDiv);
let t4 = performance.now();
console.log(`performance timing is ${t4 - t3}`);

let t5 = performance.now();
let fragment = document.createDocumentFragment();
for (let i = 1; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = "Number is" + i;
    fragment.appendChild(para);
}
document.body.appendChild(fragment);
let t6 = performance.now();

console.log(`performance timing is ${t6 - t5}`);