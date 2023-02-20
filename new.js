// Imports readline and allows us to do input in and out
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

// Ask function that takes in text and returns and resolves a promise
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
// run file in terminal with: node fileName.js
// ! DO NOT TOUCH CODE ABOVE THIS LINE

start();

async function start() {
    // Intro message
    console.log("\n-------------------------");
  console.log("Welcome to number picker!");
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.");
  console.log("-------------------------");

  async function pickHighNumber() {
    let minNum = 1;
    let pickMaxNumber = await ask(`\nPlease choose a number greater than ${minNum}: `);
    let highNum = parseInt(pickMaxNumber);
    console.log(`\nYou set ${highNum} as the highest value.`);

    let secretNumber = await ask("\nWhat is your secret number?\nI won't peek, I promise...\n");

    console.log('\nYou entered: ' + secretNumber);
    console.log(`\nThe number is between ${minNum} and ${pickMaxNumber}.`);
    console.log("\n-------------------------");
    console.log("Now let the guessing game begin!");
    console.log("-------------------------");

    let compGuess = Math.floor((highNum + minNum) / 2);
    let guessCount = 1;

    async function guessNum() {
        compGuess = Math.floor((highNum + minNum) / 2);
        let guess = await ask(`\nIs your number ${compGuess}? (Y)es or (N)o: `);
        if (guess === "y" || guess === "Y") {
            console.log(`Boo-Yah! ${secretNumber} was the secret number! It was guessed in ${guessCount} attempt(s).`);
            let replay = await ask(`\nWould you like to play again? (Y)es or (N)o?`);
            if (replay === "Y" || replay === "y") {
                return start();
            } else {
                console.log("\nThanks for playing!")
                process.exit();
            }
        } else if (guess === "n" || guess === "N") {
            checkGuess();
        }
        
    }guessNum();

    async function checkGuess() {
        let response = await ask(`\nIs your number (H)igher or (L)ower than ${compGuess}? `);
        
        // in here, we just want to check if compGuess is H or L if else statement
        // after reassignment we can call our guessNum function again
  
        if (response === "h") {
          minNum = compGuess;
          guessCount++;
          guessNum();
        } else if (response === "H") {
          minNum = compGuess;
          guessCount++;
          guessNum();
        } else if (response === "l") {
          highNum = compGuess;
          guessCount++; 
          guessNum();
        } else if (response === "L") {
          highNum = compGuess;
          guessCount++; 
          guessNum();
        } else {
        console.log("That's not a value I recognize, please use H or L.")
        checkGuess();
      }
      }checkGuess();
  }
  pickHighNumber();
}