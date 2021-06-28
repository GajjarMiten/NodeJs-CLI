const input = require("readline-sync");
let score = 0;

const name = input.question("What is your name?\n");

console.log("Hello! " + name + ", We are welcoming you here.");

const ans = input.question("Is my age is greater than 25?");

if (ans === "yes") {
    console.log("You are right.");
    score++;
    console.log("score: " + score);
} else {
    console.log("You are wrong.");
}
