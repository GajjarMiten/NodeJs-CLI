const input = require("readline-sync");
const chalk = require("chalk");
const log = console.log;
const right = chalk.bgGreenBright.black;
const wrong = chalk.bgRedBright.black;
const notice = chalk.bgYellow.black;

const MAX_LIVES = 5;

const highScores = [
    {
        name: "Miten Gajjar",
        score: "10",
    },
    {
        name: "John Wick",
        score: "9",
    },
    {
        name: "Donald Trump",
        score: "6",
    },
];

const questions = [
    {
        question: "What is the name of Sholay' s iconic villain?",
        answer: "gabbar singh",
    },
    {
        question: "Who directed Dil Chahta Hai?",
        answer: "farhan akhtar",
    },
    {
        question:
            "In Om Shanti Om, what does Deepika Padukone's character Shantipriya do?",
        answer: "actress",
    },
    {
        question:
            "What is the name of the lead female character in Dilwale Dulhania Le Jayenge?",
        answer: "simran",
    },
    {
        question:
            "Which movie is this groundbreaking line from: 'Teja main hoon, Mark idhar hai'",
        answer: "andaz apna apna",
    },
    {
        question:
            "In Karthik Calling Karthik, who was actually calling Karthik?",
        answer: "karthik",
    },
    {
        question: 'Finish the quote from Deewar: "Mere paas _____ Hai."',
        answer: "maa",
    },
    {
        question: "In 3 Idiots, what is Rancho's real name?",
        answer: "phunsukh wangdu",
    },
    {
        question:
            "In Chak De! India, how many minutes, according to coach Kabir Khan, does the team have?",
        answer: "70",
    },
    {
        question: "In Jab We Met, what is the name of Geet's first love?",
        answer: "anshuman",
    },
];

let score = 0;
let level = 1;
let lives = MAX_LIVES;

const name = input.question("What is your name?\n");
log("\n");
log("Hello! " + name + ", We are welcoming you to this bollywood quize.");
log("\n");
log(
    "There will be 3 levels, you can go to next level if you answer 3 right questions.\nYou will get 5 lives, on each wrong anser you will lose one.\nIf you loose your all lives the quize will be over for you"
);
log("\n");
function ask(qes, ans) {
    const userAns = input.question(qes + "\n");
    if (ans.toLowerCase() === userAns) {
        log(right("Yay, You are right :)"));
        score++;
        if (score % 3 === 0) {
            level++;
            log("Congrats you just cleared level: " + (level - 1));
            log("Your current level is: " + level);
        }
    } else {
        lives--;
        log(wrong("Opps, You are wrong :("));
        log(
            wrong(
                "the correct answer for this question is: ",
                chalk.underline.bgWhite.black(ans)
            )
        );
    }
    log(notice("score: " + score));
    log(notice("lives: " + lives));
    log(
        chalk.white("---------------------------------------------------------")
    );

    if (lives === 0) {
        log(wrong("Oops you lost all your lives the game is over"));
        return true;
    }
    return false;
}

function checkHighScore(score) {
    highScores.forEach((data) => {
        if (score >= data.score) {
            log(
                right(
                    "Contragts, You made a highscore By beating",
                    chalk.bgCyanBright.black(data.name)
                )
            );
        }
    });
}

let isEnd = false;

for (let i = 0; i < questions.length; i++) {
    isEnd = ask(questions[i].question, questions[i].answer);
    if (isEnd) {
        break;
    }
}

log(notice("Your score is: " + score));
log(notice("Your max level is: " + level));

checkHighScore(score);
