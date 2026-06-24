/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this repo.

Run this file with the node command:
node dogAgeCalculator.js

*/

const dogName = process.argv[2];
const dogAge = Number(process.argv[3]);

if (!dogName || !process.argv[3]) {
console.log("Please enter a dog's name and age.");
} else if (isNaN(dogAge)) {
console.log("Please enter a number for the dog's age.");
} else if (dogAge <= 0) {
console.log("Please enter a valid age for your dog.");
} else if (!Number.isInteger(dogAge)) {
console.log("Please enter a whole number for the dog's age.");
} else {
let dogYears;

if (dogAge === 1) {
dogYears = 15;
} else if (dogAge === 2) {
dogYears = 24;
} else {
dogYears = 24 + (dogAge - 2) * 5;
}

console.log(`Your dog, ${dogName}, is ${dogAge} years old, but that's ${dogYears} years old in dog years!`);
}