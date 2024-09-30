let myDiv = document.querySelector('#myDiv');
let createElement = document.createElement('span');
createElement.textContent = "this is meraj";
myDiv.insertAdjacentElement('beforeend', createElement);
console.log(myDiv);

let parent = document.querySelector('#myDiv');
let child = document.querySelector('#fpara');
parent.removeChild(child);