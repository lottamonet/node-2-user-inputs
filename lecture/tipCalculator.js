// Let's make a tip calculator with Node.js!

// Run this file with the node command:
// node tipCalculator.js

let bill = 100
let tipPercentage = 0.20
let numGuests = 4

// Let's make a tip calculator with Node.js!

// Run this file with the node command:
// node tipCalculator.js


let bill = Number(process.argv[2]);
let tipPercentage = Number(process.argv[3]);
let numGuests = Number(process.argv[4]);

// calclulate the tip amount
let tipAmount = bill * tipPercentage;
console.log("tip amount:", tipAmount);

// calculate the total bill
let totalBill = bill + tipAmount;
console.log("total bill:", totalBill);

// calculate the total bill for each guest
let amountOwedPerGuest = totalBill / numGuests;
console.log("each guest will owe:", amountOwedPerGuest);