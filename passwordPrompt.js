//The correct password from user
const correctPassword = "Sahagunsasii234";
// user input holder
let userInput = "";

// do while loop  enter the user password
do {
  userInput = prompt("Enter your password:");
  
  if (userInput !== correctPassword) {
    console.log("Incorrect, try again.");
  }
} while (userInput !== correctPassword);
// access granted
console.log("Access granted.");