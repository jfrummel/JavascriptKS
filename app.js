let firstName = 'Jeremy';

const numStates = 50;

let sum = 5 + 4;

if (firstName.charAt(0) == 'L') {
    alert('Back of the line!');
} else {
    alert('Next');
};

// This actually worked.

function sayHello() {
    alert('Hello World!');
};

sayHello();


function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry" + " " + name + ", you aren't old enough to view this page!");
    } 
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

let favVeg = ['asparagus', 'cauliflower', 'carrots'];

for (let i = 0; i < favVeg.length; i++) {
    console.log(favVeg[i]);
}

let newPeeps = [{name:'Joe', age:25}, {name:'Jeff', age:12}, {name:'Jeremy', age:37}, {name:'Mike', age:18}, {name:'Kristen', age:21}];
for (let i = 0; i < newPeeps.length; i++) {
    checkAge(newPeeps[i].name, newPeeps[i].age);
}

function getLength(str) {
    return str.length;
}

let wordLength = getLength("Hello World");

if (wordLength%2 == 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
}