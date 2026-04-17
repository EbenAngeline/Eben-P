//const readlineSync = require("readlineSync");
//const name = readlineSync.question('May I have your name? ');
const readlineSync = require("readline-sync");
 const name = readlineSync.question('May I have your name? ');
console.log('Hello ' + name + '!');
//Create five questions 
const question1 = readlineSync.question('What is the data type of 42? ');

const question2 = readlineSync.question('What is the result of 5 + "5"? ');

const question3 = readlineSync.question('What does the operator % do? ');

const question4 = readlineSync.question('Enter a number: ');

const question5 = readlineSync.question('What is the value of true == 1? ');

//Print the user's answers
console.log('Your answers:');
console.log('Answer 1: ' + question1);

console.log('Answer 2: ' + question2);

console.log('Answer 3: ' + question3);

console.log('Answer 4: ' + question4);

console.log('Answer 5: ' + question5);
