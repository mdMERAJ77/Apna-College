let student = {
    name: "meraj",
    age: 23,
    marks: 94.3,
};

const item = {
    fruits: ['mango', 'apple', 'banana'],
    priceOfMango: 40,
};



//create an object literal for the properties of thread/twitter post which includes
//username,content,likes,reposts,tags
const post = {
    username: "@meraj",
    content: "continue brother focus on study inshallah one day you became a successful men",
    likes: '9k',
    reposts: 5,
    tags: ["@sakib", "@sarik"],
}
const obj = {
    1: "a",
    2: "b",
    true: "c", //js automatically convert this key in the string
    null: "d",
    undefined: "e",
}

//add update value
post.likes = '10k';
post.country = 'india';
delete post.tags;

//objet of objects
const classInfo = {
    meraj: {
        grade: "A+",
        city: "Delhi"
    },
    sakib: {
        grade: "A++",
        city: "Pune"
    },
    sarik: {
        grade: "A+++",
        city: "kolkata"
    },
};

//Math object
Math.abs(-12); //12
Math.pow(2, 2); //4
Math.floor(9.99999); //9
Math.ceil(9.0000001); //10
Math.random() // generate number 0 to 1 but {1 exclude}

//Generate a random number 1 and 5
let num = Math.floor(Math.random() * 5) + 1;
console.log(num);
//Generate a random number 1 and 100
let num1 = Math.floor(Math.random() * 100) + 1;
console.log(num1);


//Create guess number
let guess = prompt('Enter a number between 1 to 10');
console.log(guess);

while (true) {
    if (guess.toLowerCase() === 'quit') {
        console.log('Game quit by user');
        break;
    }

    let randomNumber = Math.floor(Math.random() * 10) + 1;

    if (parseInt(guess) === randomNumber) {
        console.log("Correct guess, you win! The number was", randomNumber);
        break;
    } else {
        console.log("Wrong guess! The number was", randomNumber);
        guess = prompt('Try again');
    }
}