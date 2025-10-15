//user
let userChoice = "";

// Get all icons
const icons = document.querySelectorAll(".images");

// Get the paragraph element to display the selected icon
const selectedIconDisplay = document.getElementById("selectedIcon");
//pc choice
const pcChoiceDisplay = document.getElementById("computerChoice");
//result
const resultDisplay = document.getElementById("result");
//Scores
const userScoreDisplay = document.getElementById("userScore");

const pcScoreDisplay = document.getElementById("pcScore");

let userCounter = 0;
let pcCounter = 0;

// Add a click event listener to each icon
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // Save the selected icon's data-icon attribute
    userChoice = icon.getAttribute("alt");

    // Update the UI to show the user their choice
    selectedIconDisplay.textContent = `You selected: ${userChoice}`;
    console.log("User choice:", userChoice);

    // computer choice
    const computer = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    let pcChoice = computer[random];
    console.log("Computer's choice :", pcChoice);
    pcChoiceDisplay.textContent = `Computer has selected: ${pcChoice}`;

    if (userChoice === pcChoice) {
      resultDisplay.textContent = "It's a null match";
    } else if (userChoice === "rock" && pcChoice === "scissors") {
      resultDisplay.textContent = "You win";
      userCounter++;
      userScoreDisplay.textContent = userCounter;
    } else if (userChoice === "paper" && pcChoice === "rock") {
      resultDisplay.textContent = "You win";
      userCounter++;
      userScoreDisplay.textContent = userCounter;
    } else if (userChoice === "scissors" && pcChoice === "paper") {
      resultDisplay.textContent = "You win";
      userCounter++;
      userScoreDisplay.textContent = userCounter;
    } else {
      resultDisplay.textContent = "You lose";
      pcCounter++;
      pcScoreDisplay.textContent = pcCounter;
    }
  });
});
