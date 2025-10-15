const instructions = document.getElementById("Instructions");
instructions.addEventListener("click", () => {
  alert(
    "Create a story together without knowing what the other person wrote!\n\nHow it works:\n• Write 3 words and submit\n• Pass the device to your partner\n• They see only your last word and add 3 more\n• Keep alternating until you reach 30 words\n• Reveal the story and see what you created!\n\nThe word counter will track your progress."
  );
});

const errorMessage = document.getElementById("errorMessage");
const passTurn = document.getElementById("passButton");
const counter = document.getElementById("counter");
const reveal = document.getElementById("revealButton");
const story = document.getElementById("story");

let words = [];

const form = document.getElementById("form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault(); // removes the default of submit
  let data = new FormData(event.target);
  let box1 = data.get("box1").trim(); // trim removes the white spaces
  let box2 = data.get("box2").trim();
  let box3 = data.get("box3").trim();
  const letters = /^[a-zA-Z]+$/;
  if (words.length < 30) {
    if (box1 === "" || box2 === "" || box3 === "") {
      errorMessage.textContent = "Error: None of the boxes can be empty.";
    } else if (
      !letters.test(box1) ||
      !letters.test(box2) ||
      !letters.test(box3)
    ) {
      errorMessage.textContent =
        "Error: alphabet characters only (without spaces).";
    } else {
      errorMessage.textContent = "";
      words.push(box1, box2, box3);
      console.log(words);
      form.reset();
      counter.textContent =
        "There are " + words.length + " words on this story";
      passTurn.textContent = "Next player, click here to start";
      passTurn.addEventListener("click", () => {
        let lastWord = words[words.length - 1];
        passTurn.textContent = "Last word was: " + lastWord;
      });
    }
  }
  if (words.length === 30) {
    passTurn.textContent = "congratulations you finish your story!";
    reveal.textContent = "Reveal your story";
    reveal.addEventListener("click", () => {
      let text = words.join(" ");
      story.textContent = text;
    });
  }
}
