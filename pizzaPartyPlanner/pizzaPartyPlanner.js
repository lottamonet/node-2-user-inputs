/* 

Your task: Make a Node.js pizza party planner that calculates how many slices of pizza each guest gets, and how many slices are left over!

Follow the instructions in the README.md file in this folder.

*/

const hostName = process.argv[2];
const numberOfPizzas = Number(process.argv[3]);
const slicesPerPizza = Number(process.argv[4]);
const numberOfGuests = Number(process.argv[5]);

const totalSlices = numberOfPizzas * slicesPerPizza;
const slicesPerGuest = Math.floor(totalSlices / numberOfGuests);
const leftoverSlices = totalSlices % numberOfGuests;

console.log(
  `Hey ${hostName}! 🍕 You ordered ${numberOfPizzas} pizzas with ${slicesPerPizza} slices each — that's ${totalSlices} slices total!`
);

console.log(
  `Each of your ${numberOfGuests} guests gets ${slicesPerGuest} slices, and you'll have ${leftoverSlices} slices left over.`
);

console.log("Save those for breakfast! 😋");