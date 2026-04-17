const readlineSync=require("readline-sync");
const userString=readlineSync.question("Please enter a word or phrase:");
const index = parseInt(readlineSync.question("Please enter an index number:"));

if (index >=0 && index < userString.length) 
{  
    console.log("The character at index${index} is: " + index );
}
else 
{
    console.log("Invalid Index.p Please enter a number within the bounds of the string length."); 
}
