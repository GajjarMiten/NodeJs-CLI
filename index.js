// const input = require("readline-sync");
// let score = 0;

// const name = input.question("What is your name?\n");

// console.log("Hello! " + name + ", We are welcoming you here.");

// function ask(qes, ans) {
//     const userAns = input.question(qes);
//     if (ans === userAns) {
//         console.log("You are right");
//         score++;
//     } else {
//         console.log("You are wrong.");
//     }
//     console.log("score: " + score);
// }

// ask("Is my age is greater than 25?", "yes");

let op = "";

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        op += "* ";
    }
    op += "\n";
}
console.log(op);

op = "";

for (let i = 1; i <= 5; i++) {
    for (let j = 5 - i; j >= 0; j--) {
        op += "* ";
    }
    op += "\n";
}

console.log(op);
