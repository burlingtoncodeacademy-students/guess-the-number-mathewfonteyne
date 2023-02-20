// Imports readline and allows us to do input in and out
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

// Ask function that takes in text and returns and resolves a promise
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
// run file in terminal with: node fileName.js
// ! DO NOT TOUCH CODE ABOVE THIS LINE

// Async start function being invoked
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
        console.log("That's not a value I recognize, please use H or L.");
        checkGuess();
      }
      }checkGuess();
  }
  pickHighNumber();
}

// * This was my starting code. above is final code.
// start();

// // The function that starts the whole game
// async function start() {
//   // Intro game text
//   // Game intro message
//   console.log("\n-------------------------");
//   console.log("Welcome to number picker!");
//   console.log(
//     "Let's play a game where you (human) make up a number and I (computer) try to guess it."
//   );
//   console.log("-------------------------");

//   // Now try and complete the program.

//   // Example async await function to ask for highest number
//   async function pickHighNum() {
//     // Set lowest num
//     let minNum = 1;

//     // Asking the user for highest number
//     let pickMaxNum = await ask(
//       `\nPlease choose a number greater than ${minNum}: `
//     );

//     // Grab the value of user input
//     let highNum = parseInt(pickMaxNum);

//     // Confirmation message to print
//     console.log(`\nYou set ${highNum} as the highest value.`);

//     let secretNumber = await ask(
//       "\nWhat is your secret number?\nI won't peek, I promise...\n"
//     );

//     console.log("\nYou entered: " + secretNumber);
//     console.log(`\nThe number is between ${minNum} and ${pickMaxNum}.`);
//     console.log("\n-------------------------");
//     console.log("Now let the guessing game begin!");
//     console.log("-------------------------");

//     let compGuess = Math.floor((highNum + minNum) / 2);

//     guessNum();
    
//     async function guessNum() {
//       compGuess = Math.floor((highNum + minNum) / 2);
//       let guess = await ask(`\nIs your number ${compGuess}? (Y)es or (N)o: `);
//         if (guess === "y" || guess === "Y") {
//         console.log("Boo-Yah! What a fun game!");
        // let replay = await ask(
//         //   `\nWould you like to play again? (Y)es or (N)o?: `
//         // );}
//         //  if (replay === "y" || replay === "Y") {
          // set guess to 0/none
//         //   return pickHighNum();
//         // // make else message of bye & process.exit();
//         } else if (guess === "n" || guess === "N") {
//         // inside this else if, call function to set new range
//         // console.log(`\nIs your number (H)igher or (L)ower than ${compGuess}?`);

//         // Call and run a comparison conditional that resets highest or lowest
//         checkGuess();
//       }
//   }guessNum();

//     async function checkGuess() {
//       let response = await ask(`\nIs your number (H)igher or (L)ower than ${compGuess}? `);
      
//       // in here, we just want to check if compGuess is H or L if else statement
//       // after reassignment we can call our guessNum function again

//       if (response === "h") {
//         minNum = compGuess;
//         guessNum();
//       } else if (response === "H") {
//         minNum = compGuess;
//         guessNum();
//       } else if (response === "l") {
//         highNum = compGuess; 
//         guessNum();
//       } else if (response === "L") {
//         highNum = compGuess; 
//         guessNum();
//       } else {
//       "That's not a value I recognize, please use H or L."
//       checkGuess();
//     }
//     }checkGuess();
    
//   }pickHighNum();
// }


// Stops the start function from running
// process.exit();

//     let response = await ask(`\nIs your number (H)igher or (L)ower than ${compGuess}? `);
//     if (response === "h" || response === "H") {
//       async function higherRange() {
//         let newValue = Math.floor(((compGuess + 1) + highNum) / 2);
//         console.log(`\nThe new range is between ${compGuess + 1} and ${highNum}.`);
//         let guess = await ask(`\nIs your number ${newValue}? (Y)es or (N)o: `);
//         if (guess === "y" || guess === "Y") {
//           console.log("Boo-Yah! What a fun game!")
//         } else if (guess === "n" || guess === "N") {
//           let response = await ask(`\nIs your number (H)igher or (L)ower than ${newValue}? `);
//         }
//       }higherRange();
// }
//     else if (response === "l" || response === "L") {
//       async function lowerRange() {
//         let newValue = Math.floor(((compGuess - 1) + minNum) / 2);
//         console.log(`\nThe new range is between ${minNum} and ${compGuess - 1}.`);
//         let guess = await ask(`\nIs your number ${newValue}? (Y)es or (N)o: `);
//         }lowerRange();
//       }
//   }
